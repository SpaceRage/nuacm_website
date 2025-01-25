import Image from "next/image";

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome to My Website!</h2>
      <p>Here's my Google Calendar:</p>
      <div style={{ maxWidth: '100%', overflow: 'hidden', border: 'none' }}>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=bnVib3N0b25hY21AZ21haWwuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043" 
        style={{ border: '1px solid #777' }}
        width="800" height="600" 
        frameBorder="0" scrolling="no">
        </iframe>
      </div>
    </div>
  );
}
