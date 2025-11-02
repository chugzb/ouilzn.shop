import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

/**
 * https://next-intl.dev/docs/environments/actions-metadata-route-handlers#metadata-api
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return constructMetadata({
    title: t('title'),
    description: t('description'),
    canonicalUrl: getUrlWithLocale('', locale),
  });
}

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage(props: HomePageProps) {
  const params = await props.params;
  const { locale } = params;
  const t = await getTranslations('HomePage');

  return (
    <>
      {/* Hero Section - Elegant and sophisticated */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50/50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">

        <Container className="relative py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-5xl">
            {/* Hero Content */}
            <div className="text-center mb-16 space-y-10">
              {/* Badge - More refined */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900/5 dark:bg-stone-100/5 border border-stone-900/10 dark:border-stone-100/10 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-600 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-stone-800 dark:bg-stone-200" />
                </span>
                <span className="text-xs font-semibold tracking-wide uppercase text-stone-700 dark:text-stone-300">
                  Premium Quality Denim
                </span>
              </div>

              {/* Main Heading - More elegant typography */}
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block text-stone-900 dark:text-stone-50 leading-[1.1]">
                  {t('hero.title')}
                </span>
              </h1>

              {/* Description - Better readability */}
              <p className="mx-auto max-w-2xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-stone-600 dark:text-stone-400 font-light">
                {t('hero.description')}
              </p>

              {/* Trust Indicators - Minimalist design */}
              <div className="flex flex-wrap justify-center items-center gap-4 pt-6">
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 shadow-sm border border-stone-200 dark:border-neutral-800">
                  <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-stone-800 dark:text-stone-200">{t('trustIndicators.easyToLearn')}</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 shadow-sm border border-stone-200 dark:border-neutral-800">
                  <svg className="w-4 h-4 text-amber-600 dark:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium text-stone-800 dark:text-stone-200">{t('trustIndicators.premiumTools')}</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 shadow-sm border border-stone-200 dark:border-neutral-800">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-stone-800 dark:text-stone-200">{t('trustIndicators.activeComm')}</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white dark:bg-neutral-900 shadow-sm border border-stone-200 dark:border-neutral-800">
                  <svg className="w-4 h-4 text-stone-600 dark:text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-stone-800 dark:text-stone-200">{t('trustIndicators.stepByStep')}</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Showcase Gallery Section - Display product images */}
      <section className="py-24 md:py-36 bg-stone-100 dark:bg-neutral-950">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900/5 dark:bg-stone-100/5 border border-stone-900/10 dark:border-stone-100/10 backdrop-blur-sm mb-8">
              <span className="text-xs font-semibold tracking-wide uppercase text-stone-700 dark:text-stone-300">
                Featured Collection
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8 text-stone-900 dark:text-stone-50">
              {t('showcase.title')}
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-stone-600 dark:text-stone-400 font-light">
              {t('showcase.description')}
            </p>
          </div>

          {/* Masonry-style grid for better visual impact */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mx-auto max-w-7xl">
            {/* Large featured image - spans 2 columns on desktop */}
            <div className="col-span-2 md:col-span-2 md:row-span-2 group relative aspect-[4/3] md:aspect-square overflow-hidden rounded-2xl bg-stone-200 dark:bg-neutral-900 shadow-2xl hover:shadow-3xl transition-all duration-700">
              <Image
                src="/showcase/176200109141987z0oiuu.png"
                alt="OUILZN Premium Denim Collection"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 tracking-tight">Premium Denim Collection</h3>
                <p className="text-white/90 text-base md:text-lg font-light">Japanese Okayama Fabric</p>
              </div>
            </div>

            {/* Regular grid items */}
            {[
              '176200112049667i7poz8.png',
              '1762001153821hxbmjx2w.png',
              '1762001174779811i0te0.png',
              '17620011956849t4vs4f8.png',
              '1762001219161hfjy6pm2.png',
              '1762001255604ruv9y1ek.png',
              '1762001276137cnvq8duy.png',
              '1762001487832a039uzdb.png',
              '17620015077469nw19539.png',
              '1762001645684lcg9vpdu.png',
            ].map((image, index) => (
              <div
                key={image}
                className="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl bg-stone-200 dark:bg-neutral-900 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.03]"
              >
                <Image
                  src={`/showcase/${image}`}
                  alt={`OUILZN Denim Style ${index + 2}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/0 to-stone-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-20">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-stone-900 dark:border-stone-100"
            >
              View Full Collection
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* How It Works Section - Reimagined with step-by-step flow */}
      <section className="py-24 md:py-32 bg-white dark:bg-neutral-900">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8 text-stone-900 dark:text-stone-50">
              {t('howItWorks.title')}
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-stone-600 dark:text-stone-400 font-light">
              {t('howItWorks.description')}
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800" />
              
              {/* Step 1 */}
              <div className="relative group">
                <div className="relative bg-stone-50 dark:bg-neutral-800 rounded-2xl p-10 border border-stone-200 dark:border-neutral-700 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative w-16 h-16 bg-stone-900 dark:bg-stone-100 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">1</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-stone-900 dark:text-stone-50">
                    {t('howItWorks.step1.title')}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-center leading-relaxed font-light">
                    {t('howItWorks.step1.description')}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="relative bg-stone-50 dark:bg-neutral-800 rounded-2xl p-10 border border-stone-200 dark:border-neutral-700 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative w-16 h-16 bg-stone-900 dark:bg-stone-100 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">2</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-stone-900 dark:text-stone-50">
                    {t('howItWorks.step2.title')}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-center leading-relaxed font-light">
                    {t('howItWorks.step2.description')}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="relative bg-stone-50 dark:bg-neutral-800 rounded-2xl p-10 border border-stone-200 dark:border-neutral-700 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative w-16 h-16 bg-stone-900 dark:bg-stone-100 rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">3</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-stone-900 dark:text-stone-50">
                    {t('howItWorks.step3.title')}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-center leading-relaxed font-light">
                    {t('howItWorks.step3.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section - Modern card layout with better visual hierarchy */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-stone-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8 text-stone-900 dark:text-stone-50">
              {t('features.title')}
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-stone-600 dark:text-stone-400 font-light">
              {t('features.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mx-auto max-w-7xl">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="relative h-full bg-white dark:bg-neutral-800 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200 dark:border-neutral-700">
                <div className="w-16 h-16 bg-amber-500/10 dark:bg-amber-500/20 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-9 h-9 text-amber-600 dark:text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900 dark:text-stone-50">
                  {t('features.feature1.title')}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {t('features.feature1.description')}
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="relative h-full bg-white dark:bg-neutral-800 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200 dark:border-neutral-700">
                <div className="w-16 h-16 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-9 h-9 text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900 dark:text-stone-50">
                  {t('features.feature2.title')}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {t('features.feature2.description')}
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="relative h-full bg-white dark:bg-neutral-800 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200 dark:border-neutral-700">
                <div className="w-16 h-16 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl flex items-center justify-center mb-8">
                  <svg className="w-9 h-9 text-emerald-600 dark:text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-stone-900 dark:text-stone-50">
                  {t('features.feature3.title')}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {t('features.feature3.description')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases Section - Improved visual design */}
      <section className="py-24 md:py-32 bg-white dark:bg-neutral-900">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8 text-stone-900 dark:text-stone-50">
              {t('useCases.title')}
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-stone-600 dark:text-stone-400 font-light">
              {t('useCases.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mx-auto max-w-6xl">
            {/* Professional Use Case */}
            <div className="group relative overflow-hidden rounded-2xl border border-stone-200 dark:border-neutral-700 bg-stone-50 dark:bg-neutral-800 hover:border-stone-300 dark:hover:border-neutral-600 transition-all duration-500 hover:shadow-xl">
              <div className="p-10">
                <div className="w-14 h-14 bg-stone-900/5 dark:bg-stone-100/5 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-stone-700 dark:text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-stone-900 dark:text-stone-50">
                  {t('useCases.marketing.title')}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {t('useCases.marketing.description')}
                </p>
              </div>
            </div>

            {/* Casual Use Case */}
            <div className="group relative overflow-hidden rounded-2xl border border-stone-200 dark:border-neutral-700 bg-stone-50 dark:bg-neutral-800 hover:border-stone-300 dark:hover:border-neutral-600 transition-all duration-500 hover:shadow-xl">
              <div className="p-10">
                <div className="w-14 h-14 bg-stone-900/5 dark:bg-stone-100/5 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-stone-700 dark:text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-stone-900 dark:text-stone-50">
                  {t('useCases.education.title')}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {t('useCases.education.description')}
                </p>
              </div>
            </div>

            {/* Smart Casual Use Case */}
            <div className="group relative overflow-hidden rounded-2xl border border-stone-200 dark:border-neutral-700 bg-stone-50 dark:bg-neutral-800 hover:border-stone-300 dark:hover:border-neutral-600 transition-all duration-500 hover:shadow-xl">
              <div className="p-10">
                <div className="w-14 h-14 bg-stone-900/5 dark:bg-stone-100/5 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-stone-700 dark:text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-stone-900 dark:text-stone-50">
                  {t('useCases.content.title')}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {t('useCases.content.description')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section - Customer Reviews */}
      <section className="py-24 md:py-32 bg-stone-100 dark:bg-neutral-950">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8 text-stone-900 dark:text-stone-50">
              {t('testimonials.title')}
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-stone-600 dark:text-stone-400 font-light">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mx-auto max-w-6xl">
            {/* Testimonial 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-stone-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-700 dark:text-stone-300 mb-8 leading-relaxed font-light text-lg">
                "{t('testimonials.item-1.content')}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-stone-900 dark:bg-stone-100 flex items-center justify-center text-white dark:text-stone-900 font-bold text-lg">
                  {t('testimonials.item-1.name').charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-50">
                    {t('testimonials.item-1.name')}
                  </div>
                  <div className="text-sm text-stone-500 dark:text-stone-400">
                    {t('testimonials.item-1.role')}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-stone-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-700 dark:text-stone-300 mb-8 leading-relaxed font-light text-lg">
                "{t('testimonials.item-2.content')}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-stone-900 dark:bg-stone-100 flex items-center justify-center text-white dark:text-stone-900 font-bold text-lg">
                  {t('testimonials.item-2.name').charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-50">
                    {t('testimonials.item-2.name')}
                  </div>
                  <div className="text-sm text-stone-500 dark:text-stone-400">
                    {t('testimonials.item-2.role')}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-stone-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-700 dark:text-stone-300 mb-8 leading-relaxed font-light text-lg">
                "{t('testimonials.item-3.content')}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-stone-900 dark:bg-stone-100 flex items-center justify-center text-white dark:text-stone-900 font-bold text-lg">
                  {t('testimonials.item-3.name').charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-50">
                    {t('testimonials.item-3.name')}
                  </div>
                  <div className="text-sm text-stone-500 dark:text-stone-400">
                    {t('testimonials.item-3.role')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section - Modern newsletter signup with enhanced visuals */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-stone-900 dark:bg-neutral-950">

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-100/10 border border-stone-100/20 backdrop-blur-sm mb-8">
                <svg className="w-4 h-4 text-stone-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-semibold tracking-wide uppercase text-stone-100">Stay Updated</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8 text-white">
                {t('newsletter.title')}
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-stone-300 font-light">
                {t('newsletter.description')}
              </p>
            </div>

            <div className="relative max-w-md mx-auto">
              <div className="relative flex flex-col sm:flex-row gap-3 p-2 bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10">
                <input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-stone-900 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
                >
                  {t('newsletter.button')}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            <p className="mt-8 text-sm text-stone-400 font-light">
              {t('newsletter.disclaimer')}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
