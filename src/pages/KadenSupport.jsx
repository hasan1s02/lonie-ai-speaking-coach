import React from 'react';
import { Shield, LifeBuoy } from 'lucide-react';

const KadenSupport = () => {
  return (
    <main className="page-container fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <LifeBuoy size={48} color="#6366F1" />
        <h1 style={{ margin: 0 }}>App Support</h1>
      </div>

      <p><strong>Kaden mobile app</strong></p>
      
      <p>If you need help with the Kaden mobile app, have questions about your subscription, or want to report an issue, please contact us. We are here to help!</p>

      <h2>Contact Information</h2>
      <p><strong>Email:</strong> <a href="mailto:hasancanselmo07@gmail.com" style={{ color: '#6366F1', textDecoration: 'none' }}>hasancanselmo07@gmail.com</a></p>
      <p>We typically respond to support requests within 24-48 hours.</p>

      <h2>Delete Account / Data</h2>
      <p>If you wish to delete your data, you can do this directly from inside the app: <strong>Settings → Your data → Delete my data</strong>. This will instantly and permanently erase your anonymous identity and all associated data from our database.</p>
      <p>If you no longer have access to the app and need assistance with data deletion, please email us with the subject "Data Deletion Request".</p>
      
      <h2>Report an Issue</h2>
      <p>If you encounter inappropriate AI suggestions or have safety concerns, you can report them in the app via <strong>Settings → Support → Report an offensive suggestion</strong>, or email us directly.</p>

      <h2>Other Inquiries</h2>
      <p>For business or legal inquiries, please contact:</p>
      <p>
        Hasan Can Selmo<br />
        Istanbul, Turkey<br />
        hasancanselmo07@gmail.com
      </p>

    </main>
  );
};

export default KadenSupport;
