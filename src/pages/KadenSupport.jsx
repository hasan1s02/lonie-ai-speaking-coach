import React, { useEffect } from 'react';
import { LifeBuoy, Mail, ArrowRight, ShieldCheck, CreditCard, Smartphone, Database, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const KadenSupport = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "Support - Kaden App";
  }, []);

  return (
    <main className="page-container fade-in">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
          <LifeBuoy size={40} color="#6366F1" />
        </div>
        <h1 style={{ margin: 0, fontSize: '3.5rem', background: 'linear-gradient(to right, #ffffff, #a1a1aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>Kaden Support</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>30-day conversation and social-skills program</p>
      </div>

      <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1.5rem', padding: '2.5rem', marginBottom: '4rem', backdropFilter: 'blur(10px)' }}>
        <h2 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={24} color="#6366F1" /> Contact Us</h2>
        <p>Need help, found a bug, or want to report something? Write to us:</p>
        <div style={{ margin: '1.5rem 0' }}>
          <a href="mailto:hasancanselmo07@gmail.com" className="btn btn-primary" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem' }}>
            hasancanselmo07@gmail.com
          </a>
        </div>
        <p style={{ margin: 0, fontSize: '1rem' }}>We read every message and usually reply within a few days. It helps if you include your <strong>device model</strong>, <strong>iOS version</strong> and the <strong>app version</strong>, which is at the bottom of the Settings screen.</p>
      </div>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '2rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <CreditCard size={28} color="#6366F1" /> Subscription
        </h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>I subscribed, but the program is still locked</h3>
          <p>Open <strong>Settings → Subscription → Restore purchase</strong>. This asks the App Store whether the Apple ID currently signed in on the device owns a subscription. If nothing is found, check that you are signed in with the same Apple ID you bought it with — purchases belong to the Apple ID, not to the device. If it still does not unlock, email us.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>How do I cancel?</h3>
          <p>Subscriptions are managed by Apple, not inside Kaden. Open <strong>Manage subscriptions</strong>, or on your device: <strong>Settings app → your name → Subscriptions → Kaden → Cancel</strong>. The app links to the same place from <strong>Settings → Subscription → Manage subscription</strong>.</p>
          <p style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', padding: '1rem', borderRadius: '0 0.5rem 0.5rem 0' }}>Deleting the app does not cancel the subscription. Cancel it first, then delete the app.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>Can I get a refund?</h3>
          <p>Refunds are handled by Apple, not by us — we have no way to issue one. Request it at <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6366F1', textDecoration: 'underline' }}>reportaproblem.apple.com</a> with the Apple ID you purchased with. If something in the app went wrong, email us as well and we will help you explain it in the request.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>What do I get for the price?</h3>
          <p>Both plans unlock exactly the same thing: the full 30-day program — the daily lessons, the conversation games, the mirror days, the conversation exams, the field tasks, and Second Eye. The difference is only how long the subscription runs. The diagnosis on day one is free and does not require a subscription.</p>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '2rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <Smartphone size={28} color="#6366F1" /> Using the app
        </h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>I got a new phone / I lost my progress</h3>
          <p>Kaden has no sign-up, so your progress is kept under an anonymous identity created on your device. It survives reinstalling the app on the same device, but it does not follow you to a different phone, and we cannot look it up for you — there is no name or email address attached to it, so we genuinely cannot tell which record was yours. Your subscription <em>does</em> transfer: sign in with the same Apple ID and use <strong>Restore purchase</strong>.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>How do I change the language?</h3>
          <p><strong>Settings → Language</strong>. The app is available in English, Turkish, German, Arabic, Spanish, French and Portuguese. Your progress is not lost when you switch. One thing to know: the paragraphs written by the AI for you — the notes on individual days and the program introduction — were generated in the language you were using at the time. After switching they are hidden rather than shown in the wrong language. Your diagnosis sentence and its three points are rebuilt in the new language.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>A suggestion was wrong, offensive or unhelpful</h3>
          <p>Report it from <strong>Settings → Support → Report an offensive suggestion</strong>, which opens an email to us with your app version attached, or write to the address above. Please paste the text you received. Parts of Kaden are generated by an AI model with safety filters enabled, but no filter is perfect and we want to see anything that gets through.</p>
          <p>More generally: the suggestions are suggestions. Read them before you send anything to a real person, and change whatever does not sound like you.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>Is the "diagnosis" a medical or psychological assessment?</h3>
          <p>No. It is a name for a pattern that repeats in your own answers to the eight questions, and the app says so on the result screen. Kaden is educational content and is not a medical, psychological or therapy service. If something is weighing on you seriously, please talk to a qualified professional.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>Do you keep the screenshots I upload?</h3>
          <p>No. A screenshot you add in Second Eye is sent to the AI model to read the conversation and produce three suggested replies, and it is never written to our database — no copy is kept after the request finishes. The app also never scans or reads the rest of your photo library; only the single image you pick is used. Details are in the Privacy Policy.</p>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '2rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <Database size={28} color="#6366F1" /> Your data
        </h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>How do I delete everything?</h3>
          <p><strong>Settings → Your data → Delete my data</strong>. In one step this permanently deletes your answers, diagnosis, plan, notes and progress from our database, the anonymous identity they were stored under, and the local copy on your device. It cannot be undone.</p>
          <p>Two things it does not do: it does not cancel your subscription (do that in your Apple account first), and if you simply delete the app without using this button, the server copy stays behind. Email us if you removed the app before deleting your data and want it erased.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#E4E4E7' }}>What do you collect?</h3>
          <p>No name, email address or phone number — there is no sign-up. No advertising identifier, no analytics SDK, no tracking across other apps. The full list is in the Privacy Policy.</p>
        </div>
      </section>

      <section style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid var(--card-border)' }}>
        <h2 style={{ marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <BookOpen size={24} color="#6366F1" /> Also on this site
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link to="/kaden/privacy" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '1.1rem', transition: 'color 0.2s' }}>
            <ArrowRight size={18} color="#6366F1" /> Privacy Policy
          </Link>
          <Link to="/kaden/terms" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontSize: '1.1rem', transition: 'color 0.2s' }}>
            <ArrowRight size={18} color="#6366F1" /> Terms of Use
          </Link>
        </div>
      </section>

    </main>
  );
};

export default KadenSupport;
