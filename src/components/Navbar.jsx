
function Navbar() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar">
      <a className="navbar-brand" href="#about">
        My portfolio<span></span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
