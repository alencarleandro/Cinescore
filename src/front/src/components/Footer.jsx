export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-logo">
          <img src="/assets/img/LogoCineScore.png" alt="Logo CineScore" />
        </span>
      </div>
      <p className="footer-copyright">&copy; {new Date().getFullYear()} CineScore.</p>
    </footer>
  );
}
