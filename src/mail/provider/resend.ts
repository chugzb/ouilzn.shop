import type {
  MailProvider,
  SendEmailResult,
  SendRawEmailParams,
  SendTemplateParams,
} from '@/mail/types';

export class ResendProvider implements MailProvider {
  public getProviderName(): string {
    return 'resend';
  }

  public async sendTemplate(_params: SendTemplateParams): Promise<SendEmailResult> {
    console.info('Email template sending is disabled in this demo build.');
    return { success: true };
  }

  public async sendRawEmail(_params: SendRawEmailParams): Promise<SendEmailResult> {
    console.info('Raw email sending is disabled in this demo build.');
    return { success: true };
  }
}
