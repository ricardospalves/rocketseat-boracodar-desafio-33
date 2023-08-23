import { APP_CONFIG } from '@/constants/appConfig/appConfig'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const IMAGE_PATH = 'images/ticket-cover.svg'

export const Cover = () => {
  return (
    <div className="col-span-7 bg-purple-700">
      <img
        src={
          IS_PRODUCTION
            ? `${APP_CONFIG.websiteUrl}/${IMAGE_PATH}`
            : `./${IMAGE_PATH}`
        }
        className="block w-full h-full"
        alt="IA para Devs"
      />
    </div>
  )
}
