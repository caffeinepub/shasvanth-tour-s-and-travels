import { useActor } from './useActor';

// Placeholder for future backend queries
// Add React Query hooks here when backend functionality is implemented

export function useQueries() {
  const { actor, isFetching } = useActor();
  
  return {
    actor,
    isFetching,
  };
}
