import { Protect } from '@clerk/nextjs'
import { PricingTable } from '@clerk/nextjs'

function TeamCard() {
  return (
    <div className="px-4 lg:px-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Team</h1>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Team Management</h2>
            <p className="text-muted-foreground">
              Manage your team members and their permissions.
            </p>
          </div>
        </div>
      </div>
    )
}


export default function TeamPage() {
  return (
    <Protect
      plan="starter"
      fallback={<PricingTable/>}
    >
      <TeamCard />
    </Protect>
  )
} 