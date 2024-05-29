interface EmptyStateProps {
  planetName: string
}

export function EmptyState({ planetName }: EmptyStateProps) {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <p className="text-zinc-50">
        Não há endereços no planeta {planetName} cadastrados.
      </p>
    </div>
  )
}
