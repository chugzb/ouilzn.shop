import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import { VideoGallery } from '@/components/video/VideoGallery';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'GalleryPage' });

  return constructMetadata({
    title: t('title'),
    description: t('description'),
    canonicalUrl: getUrlWithLocale('/gallery', locale),
  });
}

interface GalleryPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function GalleryPage(props: GalleryPageProps) {
  const params = await props.params;
  const { locale } = params;
  const t = await getTranslations('GalleryPage');

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20">
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </Container>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 md:py-24">
        <Container>
          <VideoGallery />
        </Container>
      </section>
    </>
  );
}
