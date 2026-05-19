import React from 'react';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <main className="page-container fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Shield size={48} color="#6366F1" />
        <h1 style={{ margin: 0 }}>Privacy Policy</h1>
      </div>

      <p><strong>Effective date:</strong> May 19, 2026<br/>
      <strong>Last updated:</strong> May 19, 2026</p>

      <p>This Privacy Policy describes how Lonie ("we", "us", or "our") collects, uses, and shares information when you use the Lonie mobile application and related services (collectively, the "Service"). By using Lonie, you agree to the practices described below.</p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following categories of information:</p>
      <ul>
        <li><strong>Account &amp; Identifiers:</strong> Email address (for passwordless login via one-time code), a unique device identifier, and a display name you choose.</li>
        <li><strong>Voice Data:</strong> When you speak inside a practice scenario, your voice is processed in real time to convert it to text. We do not permanently store raw audio files.</li>
        <li><strong>User Content:</strong> Text messages you type or that are transcribed from speech, the AI's responses, scenarios you start, custom scenarios you create, and phrases you save to your phrasebook.</li>
        <li><strong>Usage &amp; Progress Data:</strong> Daily streak, XP, level, weekly leaderboard score, scenario completion history, interest signals derived from your activity, and learning goals you select.</li>
        <li><strong>Subscription Data:</strong> Whether you have an active Premium subscription. Actual payment details (card numbers, billing addresses) are handled directly by Apple or Google and are never sent to us.</li>
        <li><strong>Device &amp; Technical Data:</strong> Device model, operating system version, app version, timezone offset, language preference, and (if you opt in to crash reporting) anonymous crash and performance diagnostics.</li>
        <li><strong>Push Notification Tokens:</strong> If you grant notification permission, we store the Expo / APNs token tied to your device so we can send streak reminders and weekly reports.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide AI-powered language coaching, including real-time speech recognition and grammar feedback.</li>
        <li>To maintain your account, progress, streaks, phrasebook, friends, and leaderboards.</li>
        <li>To send transactional emails (login codes) and, with your permission, push notifications.</li>
        <li>To process subscriptions through Apple App Store / Google Play and unlock Premium features via RevenueCat.</li>
        <li>To detect abuse, prevent fraud, enforce our Terms, and keep the Service safe.</li>
        <li>To diagnose crashes and improve app stability and performance.</li>
        <li>To measure the effectiveness of marketing campaigns in aggregate (we do not engage in cross-context behavioral advertising directed at children).</li>
      </ul>

      <h2>3. Third-Party Service Providers (Sub-processors)</h2>
      <p>We share limited information with the following service providers so they can perform services on our behalf:</p>
      <ul>
        <li><strong>OpenAI</strong> — Your messages (text or transcribed speech) and scenario context are sent to the OpenAI API (GPT-4o-mini) to generate AI replies and grammar feedback. OpenAI processes this data under its own API terms and does not use API inputs to train its models.</li>
        <li><strong>Amazon Web Services (AWS)</strong> — Hosts our backend (Lambda, API Gateway, RDS PostgreSQL) in the EU (Frankfurt) region.</li>
        <li><strong>RevenueCat</strong> — Manages subscription state across iOS and Android.</li>
        <li><strong>Resend</strong> — Delivers transactional emails (login codes).</li>
        <li><strong>Apple App Store / Google Play</strong> — Process subscription payments and handle billing.</li>
        <li><strong>Expo / Apple Push Notification service (APNs) / Firebase Cloud Messaging (FCM)</strong> — Deliver push notifications.</li>
        <li><strong>Sentry</strong> (if enabled) — Receives anonymized crash and performance reports to help us fix bugs.</li>
      </ul>
      <p>We do <strong>not</strong> sell your personal information, and we do not share it with advertising networks for cross-context behavioral advertising.</p>

      <h2>4. Data Retention</h2>
      <ul>
        <li>Voice audio is processed transiently and not stored after transcription.</li>
        <li>Chat history within a single scenario is kept on your device and on our backend for as long as your account is active so you can review progress.</li>
        <li>Account, streak, XP, phrasebook, and subscription metadata are retained while your account exists.</li>
        <li>One-time login codes expire 10 minutes after issuance.</li>
        <li>Crash diagnostics are retained for up to 90 days.</li>
        <li>When you delete your account (see Section 7), we delete or anonymize your personal data from our active databases within 30 days, subject to limited legal, tax, or fraud-prevention retention requirements.</li>
      </ul>

      <h2>5. Children's Privacy (COPPA)</h2>
      <p>Lonie is intended for users <strong>13 years of age and older</strong>. We do not knowingly collect personal information from children under 13. If we learn that we have inadvertently collected personal information from a child under 13, we will delete that information promptly. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:support@lonieapp.com">support@lonieapp.com</a>.</p>

      <h2>6. California Privacy Rights (CCPA / CPRA)</h2>
      <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act, as amended by the CPRA:</p>
      <ul>
        <li><strong>Right to Know</strong> — Request the categories and specific pieces of personal information we have collected about you in the past 12 months.</li>
        <li><strong>Right to Delete</strong> — Request deletion of personal information we collected from you, subject to certain exceptions.</li>
        <li><strong>Right to Correct</strong> — Request correction of inaccurate personal information.</li>
        <li><strong>Right to Opt-Out of Sale or Sharing</strong> — We do not sell or share your personal information for cross-context behavioral advertising. There is therefore nothing to opt out of, but you may submit a request to confirm this at any time.</li>
        <li><strong>Right to Limit Use of Sensitive Personal Information</strong> — Voice recordings are treated as sensitive personal information; we already limit our use of them to providing the service you requested.</li>
        <li><strong>Right to Non-Discrimination</strong> — We will not discriminate against you for exercising any of these rights.</li>
      </ul>
      <p>To exercise any of these rights, email <a href="mailto:support@lonieapp.com">support@lonieapp.com</a> with the subject line "California Privacy Request". We will verify your identity using the email associated with your Lonie account and respond within 45 days.</p>

      <h2>7. Data Deletion &amp; Account Closure</h2>
      <p>You can delete your account and all associated data at any time from the in-app Settings menu ("Delete Account"). Upon deletion, your XP, streak, phrasebook, leaderboard placement, friendship records, and account credentials are removed from our active databases within 30 days. You may also email <a href="mailto:support@lonieapp.com">support@lonieapp.com</a> to request deletion if you no longer have access to the app.</p>

      <h2>8. Security</h2>
      <p>We use HTTPS in transit, AWS-managed encryption at rest, scoped IAM roles, and strict database security groups. No method of transmission over the internet is 100% secure, but we work to protect your information using industry-standard safeguards.</p>

      <h2>9. International Transfers</h2>
      <p>Our backend is hosted in the European Union (Frankfurt). If you access Lonie from outside the EU, your information will be transferred to and processed in the EU. Where required by law, we rely on appropriate safeguards such as Standard Contractual Clauses for international transfers.</p>

      <h2>10. Your Choices</h2>
      <ul>
        <li><strong>Microphone &amp; Speech Recognition:</strong> You can revoke these permissions at any time in your device settings; the speaking practice features will be disabled until you re-grant them.</li>
        <li><strong>Push Notifications:</strong> Toggle individual notification types in the in-app Settings or revoke all notifications in your device settings.</li>
        <li><strong>Marketing Communications:</strong> We do not send marketing emails. Login codes and security messages are transactional and cannot be opted out of while your account is active.</li>
      </ul>

      <h2>11. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Material changes will be notified inside the app or by email. The "Last updated" date at the top of this page reflects the most recent revision.</p>

      <h2>12. Contact Us</h2>
      <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:</p>
      <p>
        <strong>Lonie Support</strong><br/>
        Email: <a href="mailto:support@lonieapp.com">support@lonieapp.com</a><br/>
        Website: <a href="https://lonieapp.com">https://lonieapp.com</a>
      </p>
    </main>
  );
};

export default Privacy;
