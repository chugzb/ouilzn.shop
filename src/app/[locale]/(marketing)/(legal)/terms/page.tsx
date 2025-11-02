import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return constructMetadata({
    title: '服务条款 | ' + t('title'),
    description: '阅读 OUILZN 的服务条款，了解购买我们高端牛仔衬衫时的权利、义务和相关规定。',
    canonicalUrl: getUrlWithLocale('/terms', locale),
  });
}

export default async function TermsOfServicePage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl prose prose-gray dark:prose-invert">
        <h1>服务条款</h1>

        <p className="lead">
          最后更新：{new Date().toLocaleDateString()}
        </p>

        <h2>接受条款</h2>
        <p>
          通过访问和使用 OUILZN 网站及服务，您同意遵守并受本服务条款的约束。
          如果您不同意这些条款，请不要使用我们的服务。
        </p>

        <h2>服务描述</h2>
        <p>
          OUILZN 专注于高端牛仔衬衫，采用日本冈山顶级丹宁面料，结合意大利传统裁剪工艺。
          我们致力于为客户提供可持续、高品质的牛仔衬衫产品和优质的客户服务。
        </p>

        <h2>用户账户</h2>
        <p>用户在使用我们的服务时需要：</p>
        <ul>
          <li>提供准确、完整的注册和配送信息</li>
          <li>保护账户安全，不与他人共享登录信息</li>
          <li>及时更新个人信息和配送地址</li>
          <li>对账户下的所有订单负责</li>
        </ul>

        <h2>订单和付款</h2>
        <p>
          所有订单需要通过我们的官方网站提交。我们保留拒绝或取消任何订单的权利。
          付款必须在订单确认时完成，我们接受多种安全的付款方式。
        </p>

        <h2>配送和退货</h2>
        <p>
          我们提供全球配送服务，标准配送5-7个工作日，快速配送2-3个工作日。
          我们提供30天退货保证，未穿着带标签的商品可免费退货或换货。
        </p>

        <h2>知识产权</h2>
        <p>
          网站上的所有内容，包括但不限于设计、文字、图片、商标、产品图片等，均受知识产权法保护。
          未经授权，不得复制、分发或使用网站内容。
        </p>

        <h2>免责声明</h2>
        <p>
          我们努力确保产品质量和服务的稳定性，但不对任何配送延误或产品色差承担责任。
          产品按"现状"提供，我们提供质量保证但不提供其他明示或暗示的保证。
        </p>

        <h2>联系我们</h2>
        <p>
          如果您对服务条款有任何疑问，请联系我们：support@ouilzn.shop
        </p>
      </div>
    </Container>
  );
}
