interface EmptyStateProps {
  planetName: string
}

export function EmptyState({ planetName }: EmptyStateProps) {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <p className="text-slate-50">
        Não há endereços do planeta {planetName} cadastrados.
      </p>
    </div>
  )
}
