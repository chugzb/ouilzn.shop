'use client';

import { sendMessageAction } from '@/actions/send-message';
import { FormError } from '@/components/shared/form-error';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

/**
 * 产品咨询请求表单组件
 * 这是一个客户端组件，用于处理产品咨询请求的提交
 */
export function ContactFormCard() {
  const t = useTranslations('ContactPage.form');
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');

  // 创建产品咨询请求表单验证模式
  const formSchema = z.object({
    name: z.string().min(3, t('nameMinLength')).max(30, t('nameMaxLength')),
    email: z.string().email(t('emailValidation')),
    message: z
      .string()
      .min(10, t('messageMinLength'))
      .max(500, t('messageMaxLength')),
  });

  // 表单类型定义
  type ContactFormValues = z.infer<typeof formSchema>;

  // 初始化表单
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // 处理表单提交
  const onSubmit = (values: ContactFormValues) => {
    startTransition(async () => {
      try {
        setError('');

        // 使用联系服务器操作提交表单数据
        const result = await sendMessageAction(values);

        if (result?.data?.success) {
          toast.success(t('success'));
          form.reset();
        } else {
          const errorMessage = result?.data?.error || t('fail');
          setError(errorMessage);
          toast.error(errorMessage);
        }
      } catch (err) {
        console.error('表单提交错误:', err);
        setError(t('fail'));
        toast.error(t('fail'));
      }
    });
  };

  return (
    <Card className="mx-auto max-w-lg overflow-hidden pt-6 pb-0">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{t('title')}</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('name')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email')}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t('email')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('message')}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t('message')} rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormError message={error} />
          </CardContent>
          <CardFooter className="mt-6 px-6 py-4 flex justify-between items-center bg-muted rounded-none">
            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer"
            >
              {isPending ? t('submitting') : t('submit')}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
