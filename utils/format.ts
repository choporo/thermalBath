export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};


export function formatQuantity(quantity: number, noun: string): string {
  return quantity === 0 ? `${noun} : 0` : `${noun} : ${quantity}개 `
}