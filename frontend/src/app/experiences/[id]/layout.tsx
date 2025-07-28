import { ReactNode } from 'react'
import { experiencesAPI } from '../../../util/apiResponse.util'

export async function generateMetadata({ params }: { params: any }) {
  const { id } = await params
  const response = await experiencesAPI.getExperienceById(id)
  const exp = response.data
  if (!exp) return {}
  return {
    title: `${exp.position} at ${exp.company_name} | Experience | Mishra Shardendu Portfolio`,
    description: exp.description,
    openGraph: {
      title: `${exp.position} at ${exp.company_name} | Experience | Mishra Shardendu Portfolio`,
      description: exp.description,
      url: `https://mishrashardendu22.is-a.dev/experiences/${id}`,
      type: 'article',
      siteName: 'Shardendu Mishra Portfolio',
      images: exp.images ? exp.images.map((img) => ({ url: img })) : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${exp.position} at ${exp.company_name} | Experience | Mishra Shardendu Portfolio`,
      description: exp.description,
      images: exp.images || [],
    },
  }
}

export default function ExperienceDetailLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
