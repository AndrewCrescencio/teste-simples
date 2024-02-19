import type { Fetcher } from 'swr';
import useSWR from 'swr';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface ApiResponse {
  todos: Todo[];
}

class ResponseError extends Error {
  response: Response;

  constructor(message: string, response: Response) {
    super(message);
    this.response = response;
  }
}

const fetcher: Fetcher<ApiResponse, string> = (...rest: any) =>
  fetch(rest).then((res) => res.json());

function useTodos() {
  const { data, error, isLoading } = useSWR<ApiResponse, ResponseError>(
    'https://dummyjson.com/todos',
    fetcher,
  );

  return {
    todosData: data,
    isLoading,
    isError: error,
  };
}

export { useTodos };
