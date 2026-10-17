'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
export function CopyEmail({ email, labels }: { email: string; labels: { copy: string; copied: string; copyFailed: string } }) {
  const [status, setStatus] = useState('');
  return <div className="copy-wrap"><button type="button" className="copy-email" onClick={async () => {
    try { await navigator.clipboard.writeText(email); setStatus(labels.copied); } catch { setStatus(labels.copyFailed); }
  }}>{status === labels.copied ? <Check size={16} /> : <Copy size={16} />}{labels.copy}</button><span className="copy-status" aria-live="polite">{status}</span></div>;
}
