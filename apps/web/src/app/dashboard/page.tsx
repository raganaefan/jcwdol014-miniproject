'use client';

import { useEffect, useState } from 'react';
import {
  Heading,
  Table,
  Td,
  Th,
  Thead,
  Tbody,
  Tr,
  Spinner,
  Center,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

export default function Events() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/events'); // Update this to the correct API endpoint if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();

        // Extract the events array from the data
        setEvents(data.data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <Center mt="100px">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center mt="100px">
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Center>
    );
  }

  return (
    <div>
      <Heading as="h3">Events</Heading>
      <hr />
      <Table marginTop={10}>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th>Organizer ID</Th>
          </Tr>
        </Thead>
        <Tbody>
          {events.map((event, index) => (
            <Tr key={index}>
              <Td>{event.id}</Td>
              <Td>{event.name}</Td>
              <Td>{event.date}</Td>
              <Td>{event.organizerId}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}
