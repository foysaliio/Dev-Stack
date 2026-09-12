interface FooterLinksProps {
  title: string;
  links: string[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="">
      <h3 className="">{title}</h3>
      {links.map((link, index) => (
        <ul className="text-sm text-slate-400">
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FooterLinks;
