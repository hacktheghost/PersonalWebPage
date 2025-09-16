import { getSiteData } from '@/lib/data';
import { useI18n } from '@/i18n/ClientI18nProvider';
function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.3-3.5-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-.8 1.8-1.1.1-.7.4-1 .7-1.2-2.3-.3-4.7-1.1-4.7-5 0-1.1.4-2 1.1-2.7-.1-.2-.5-1.3.1-2.7 0 0 .9-.3 2.8 1.1.8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.9-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.5.1 2.7.7.7 1.1 1.6 1.1 2.7 0 3.9-2.4 4.7-4.7 5 .4.3.8.9.8 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.84v1.98h.06c.53-1.01 1.82-2.08 3.75-2.08 4.01 0 4.75 2.64 4.75 6.07V23h-4v-5.91c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V23h-4V8.5z"/>
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable={false} {...props}>
      <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
    </svg>
  );
}

export default function SocialLinks({ className = '' }: { className?: string }) {
  const data = getSiteData();
  const { email, linkedin, phone, github } = data.personal.contact;
  const { t } = useI18n();
  return (
    <nav aria-label={t('social.aria.nav')} className={`flex items-center gap-3 ${className}`}>
      <a href={`mailto:${email}`} aria-label={t('social.aria.email')} className="text-gray-600 hover:text-secondary dark:text-gray-300" target="_blank" rel="noopener noreferrer">
        <IconMail className="h-5 w-5" />
      </a>
      <a href={`https://${linkedin}`} aria-label={t('social.aria.linkedin')} className="text-gray-600 hover:text-secondary dark:text-gray-300" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn className="h-5 w-5" />
      </a>
      <a href={`tel:${phone}`} aria-label={t('social.aria.phone')} className="text-gray-600 hover:text-secondary dark:text-gray-300">
        <IconPhone className="h-5 w-5" />
      </a>
      {github ? (
        <a href={`https://${github}`} aria-label={t('social.aria.github')} className="text-gray-600 hover:text-secondary dark:text-gray-300" target="_blank" rel="noopener noreferrer">
          <IconGitHub className="h-5 w-5" />
        </a>
      ) : null}
    </nav>
  );
}



