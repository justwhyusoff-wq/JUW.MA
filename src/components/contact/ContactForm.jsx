'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries } from '@/config/industries.config';

export function ContactForm() {
  const t = useTranslations('contact');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log('Contact form submission:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-card">
      <h3 className="font-display text-2xl font-bold text-textMain mb-6">
        {t('formTitle')}
      </h3>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-5 text-emerald-700"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check size={16} strokeWidth={3} />
            </span>
            <span className="text-sm font-medium">Message sent. We'll get back to you within 24 hours.</span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <Field
              label={t('name')}
              error={errors.name?.message}
              {...register('name', { required: 'Name is required' })}
            />
            <Field
              label={t('company')}
              {...register('company')}
            />

            <div>
              <label className="mb-2 block font-display text-[11px] font-semibold uppercase tracking-widest text-textMuted">
                {t('industry')}
              </label>
              <select
                {...register('industry')}
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-textMain focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-shadow"
              >
                <option value="">—</option>
                {industries.map((ind) => (
                  <option key={ind.slug} value={ind.slug}>
                    {ind.name.en}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block font-display text-[11px] font-semibold uppercase tracking-widest text-textMuted">
                {t('message')}
              </label>
              <textarea
                rows={5}
                {...register('message', { required: 'Tell us a bit about your project' })}
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-textMain placeholder:text-textSubtle focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-shadow resize-none"
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-primaryHover disabled:opacity-60"
            >
              {isSubmitting ? 'Sending…' : t('submit')}
              <Send size={14} className="transition-transform group-hover:translate-x-1 rtl-flip" />
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

// eslint-disable-next-line react/display-name
const Field = ({ label, error, ...props }) => (
  <div>
    <label className="mb-2 block font-display text-[11px] font-semibold uppercase tracking-widest text-textMuted">
      {label}
    </label>
    <input
      {...props}
      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-textMain placeholder:text-textSubtle focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-shadow"
    />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);
