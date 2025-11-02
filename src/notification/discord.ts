export async function sendMessageToDiscord(
  sessionIdOrPayload:
    | string
    | {
        sessionId: string;
        customerId: string;
        userName: string;
        amount: number;
      },
  customerId?: string,
  userName?: string,
  amount?: number
): Promise<void> {
  const payload =
    typeof sessionIdOrPayload === 'string'
      ? {
          sessionId: sessionIdOrPayload,
          customerId: customerId ?? '',
          userName: userName ?? '',
          amount: amount ?? 0,
        }
      : sessionIdOrPayload;

  console.info('Discord notifications disabled', payload);
}
