import React from 'react';
import { Shield } from 'lucide-react';

const KadenPrivacy = () => {
  return (
    <main className="page-container fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Shield size={48} color="#6366F1" />
        <h1 style={{ margin: 0 }}>Privacy Policy</h1>
      </div>

      <p><strong>Kaden mobile app</strong> · Last updated: [DATE] · Effective: [DATE]</p>

      <p>This policy explains what the Kaden mobile app (“Kaden”, “the app”, “we”, “us”) collects, why, who it is shared with, and how you can delete it. It applies to the app only.</p>

      <p>Controller: [LEGAL ENTITY NAME], [ADDRESS]. Contact: [SUPPORT EMAIL].</p>

      <h2>1. The short version</h2>
      <ul>
        <li>There is no sign-up. We never ask for your name, email address or phone number.</li>
        <li>Your progress is stored on your device and copied to our database under a random, anonymous identifier, so it survives reinstalling the app.</li>
        <li>Some of what you write — and any conversation screenshot you choose to upload — is sent to Google’s Gemini model to generate a response. We do not store the screenshots.</li>
        <li>There are no advertising, analytics or tracking SDKs in the app. We do not sell your data, and we do not track you across other apps or websites.</li>
        <li>You can erase everything from inside the app: Settings → Your data → Delete my data.</li>
      </ul>

      <h2>2. Who you are to us</h2>
      <p>Kaden has no login screen. On first launch the app creates an anonymous account with Firebase Authentication. This gives your device a random identifier (a “UID”) that is not linked to your name, email address, phone number, social profile or advertising ID. We cannot identify you from it.</p>

      <h2>3. What the app collects</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: '8px' }}>Data</th>
            <th style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: '8px' }}>Why</th>
            <th style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: '8px' }}>Where it is stored</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Your answers to the eight diagnostic questions (the index of the option you picked)</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>To produce your diagnosis and build your personal 30-day plan</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Device + our database</td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Your diagnosis sentence, the three points under it, your plan and the one-line note on each day</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>To show the same program every time you open the app</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Device + our database</td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Text you type: micro-exercise answers, mirror-day answers, field reports and follow-up notes</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>To show them back to you later in the program and to generate feedback</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Device + our database</td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Exam results: pass or fail, number of turns, number of attempts, and your last five attempts</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>To show what changed since your previous attempt</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Device + our database</td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Completed days and your chosen language</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>To continue where you left off, in the right language</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Device + our database</td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Conversation screenshots you upload in “Second Eye”</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>To read the conversation and suggest three sentences you could send</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Held in the app’s memory for that request only — never written to our database</td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Subscription status (active or not)</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>To unlock the program</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>RevenueCat and the app store; on your device as a yes/no flag</td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>An app-integrity token (Firebase App Check: App Attest on iOS, Play Integrity on Android)</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>To confirm requests come from the genuine app and not from a script</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Not stored by us</td>
          </tr>
        </tbody>
      </table>

      <h3>What the app does not collect</h3>
      <ul>
        <li>No name, email address, phone number or postal address.</li>
        <li>No contacts, calendar, microphone, or precise location; no scanning of your photo library.</li>
        <li>No advertising identifier (IDFA / AAID) and no cross-app or cross-site tracking.</li>
        <li>No third-party analytics, attribution or crash-reporting SDK.</li>
        <li>No payment card details. Payment is handled entirely by Apple or Google; we never see your card number.</li>
      </ul>

      <h2>4. Photos and the “Second Eye” feature</h2>
      <p>Second Eye is optional. When you use it, the system photo picker asks for your permission and you choose one image. Only that image is sent — the app does not scan, index or read the rest of your photo library.</p>
      <p>The image is transmitted to Google’s Gemini model through Firebase AI Logic so the model can read the conversation and return three suggested replies. We do not write the image to our database and we do not keep a copy after the request completes. Google processes it as our service provider under Google’s data processing terms.</p>
      <p>Please note: a screenshot of a chat contains someone else’s words, and sometimes their name or photo. Only upload conversations you are entitled to share, and hide anything you do not want processed.</p>

      <h2>5. AI processing</h2>
      <p>Kaden uses Google’s Gemini models through Firebase AI Logic on a small number of days: the diagnosis and plan on day 1, the exam conversations, the mirror-day answers and the field reports. The content of those requests — your answers, the text you wrote, and any screenshot you uploaded — is sent to Google to generate the response.</p>
      <ul>
        <li>The app contains no AI API key. Requests are authenticated by Firebase App Check, so they cannot be replayed from outside the app.</li>
        <li>We do not use your content to train any model of our own.</li>
        <li>Google acts as our processor for these requests. See Firebase privacy and the Generative AI terms.</li>
        <li>Safety filters are enabled for harassment, hate speech, sexually explicit and dangerous content. If a request is blocked, the app falls back to pre-written text instead of showing you model output.</li>
        <li>AI output can be wrong. It is a suggestion, not advice about a specific person or situation.</li>
      </ul>

      <h2>6. Where your data is stored</h2>
      <p>Two copies exist:</p>
      <ul>
        <li>On your device, in the app’s private storage. Removing the app removes this copy.</li>
        <li>In Google Cloud Firestore, in a single document keyed to your anonymous UID, hosted in [REGION]. Security rules allow that document to be read or written only by the anonymous account that owns it. Removing the app does not remove this copy — use the in-app deletion in section 9.</li>
      </ul>
      <p>Data in transit is encrypted with TLS; data at rest is encrypted by Google Cloud.</p>

      <h2>7. Who we share data with</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: '8px' }}>Recipient</th>
            <th style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: '8px' }}>What they receive</th>
            <th style={{ textAlign: 'left', borderBottom: '2px solid #ddd', padding: '8px' }}>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Google (Firebase Authentication, Cloud Firestore, App Check, Firebase AI Logic / Gemini)</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Your anonymous UID, your stored progress, and the content of AI requests</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Hosting, app-integrity verification and AI generation</td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>RevenueCat, Inc.</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>An anonymous purchase identifier and your subscription status</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>To manage and verify subscriptions across App Store and Google Play</td>
          </tr>
          <tr>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Apple / Google</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Your purchase</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>They process the payment and hold the billing relationship</td>
          </tr>
        </tbody>
      </table>
      <p>We do not sell personal data, we do not share it for cross-context behavioural advertising, and we do not disclose it to anyone else except where we are legally required to.</p>

      <h2>8. Legal bases (EEA / UK)</h2>
      <ul>
        <li><strong>Performance of a contract</strong> — storing your answers, plan and progress, generating the AI responses you asked for, and providing or restoring your subscription.</li>
        <li><strong>Consent</strong> — access to your photo library, which you grant in the system dialog and can withdraw at any time in your device settings.</li>
        <li><strong>Legitimate interests</strong> — App Check and database security rules, to prevent abuse of the service.</li>
      </ul>

      <h2>9. Deleting your data</h2>
      <p>Open Settings → Your data → Delete my data. In one step this permanently deletes:</p>
      <ul>
        <li>the document holding your answers, diagnosis, plan, notes and progress in our database;</li>
        <li>the anonymous identity that pointed to it; and</li>
        <li>the local copy on your device.</li>
      </ul>
      <p>It cannot be undone, and it does not cancel your subscription — cancel that in your Apple or Google account. If you delete the app without doing this first, the server copy remains attached to an anonymous identity nobody can reach; email us if you want it removed.</p>

      <h2>10. Retention</h2>
      <p>Your progress is kept until you delete it. Purchase records are retained by RevenueCat, Apple and Google under their own policies and for the periods tax law requires.</p>

      <h2>11. Your rights</h2>
      <p>Depending on where you live, you may have the right to access, correct, delete, export, restrict or object to the processing of your personal data, and to withdraw consent. Deletion is available inside the app and is complete.</p>
      <p>For anything else, write to [SUPPORT EMAIL]. Because the app is anonymous, we usually cannot connect a request to a stored record without information only you can provide; we will tell you what is needed, or explain why we cannot comply. You also have the right to complain to your local data protection authority.</p>

      <h2>12. Children</h2>
      <p>Kaden is not intended for children. You must be at least [17 / 18] years old to use it. We do not knowingly collect data from anyone below that age; if you believe a child has used the app, contact us and we will delete the record.</p>

      <h2>13. Changes</h2>
      <p>If we change this policy we will update the date at the top of this page. If a change is significant, we will surface it in the app before it takes effect.</p>

      <h2>14. Contact</h2>
      <p>[LEGAL ENTITY NAME], [ADDRESS] · [SUPPORT EMAIL]</p>
      <p>You can also report an AI suggestion you found offensive or harmful from Settings → Support → Report an offensive suggestion.</p>

    </main>
  );
};

export default KadenPrivacy;
