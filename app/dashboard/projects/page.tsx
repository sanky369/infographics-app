export default function ProjectsPage() {
  return (
    <div className="px-4 lg:px-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Projects</h1>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Project Management</h2>
          <p className="text-muted-foreground">
            Organize and manage all your projects in one place.
          </p>
        </div>
      </div>
    </div>
  )
} 