'use client';

import {
  Input,
  Stack,
  Button,
  Center,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookies } from '@/actions/cookies';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();

        setCookies('token', result.token);
        router.push('/dashboard'); // Redirect to a protected page after successful login
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <Center mt="100px">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} w="500px">
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <Input
            placeholder="Email"
            size="md"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            size="md"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Sign In</Button>
        </Stack>
      </form>
    </Center>
  );
}
