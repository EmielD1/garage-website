// The repair clinic's list page, where the menu's "Repair clinic" link goes. It lists every clinic
// with a link to its own page. Until an editor adds a clinic in /admin, it says so honestly and
// explains what the clinic will be, instead of showing an empty page.
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import { ButtonLink } from '@/components/site/ButtonLink'
import { FramedCard } from '@/components/site/FramedCard'
import { Notice } from '@/components/site/Notice'
import { PageTitle } from '@/components/site/PageTitle'
import { formatWhen } from '@/lib/format'
import config from '@/payload.config'

export const dynamic = 'force-dynamic'




export const metadata: Metadata = {
  title: 'Maintenance & Repairs',
 description: 'Discover the car maintenance and repair services offered by Garage Website.',
}

export default async function ClinicsPage() {
  const payload = await getPayload({ config })
  // Newest first: the clinic added last is usually the one that is on now.
  const clinics = (await payload.find({ collection: 'clinics', sort: '-createdAt', depth: 0, limit: 20 })).docs
  

  return (
    <div className="pb-6">
      <PageTitle
        title="Maintenance & Repairs"
        intro="Discover our car maintenance and repair services. We help you keep your car safe and reliable."
        
      />
      {clinics.length === 0 ? (
        <Notice tone="warning" label="Our services" className="max-w-3xl">
          <p className="font-heading text-xl font-extrabold">Professional car maintenance and repairs</p>
          <p>Contact us to discuss your car's needs and arrange an appointment.</p>
        </Notice>
      ) : (
        <ul className="grid max-w-3xl gap-block">
          {clinics.map((clinic) => (
            <li key={clinic.id} className="grid">
              <FramedCard title={clinic.name} href={`/clinics/${clinic.slug}`} accent="coral" headingLevel="h2">
                <p className="font-semibold">{formatWhen(clinic)}</p>
                <p>{clinic.summary}</p>
                <ButtonLink href={`/clinics/${clinic.slug}`} className="w-fit">Book a time slot</ButtonLink>
              </FramedCard>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
