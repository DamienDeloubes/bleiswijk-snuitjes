import Link from "next/link";

const Error = () => {

  return (
    <>
    <section className="error_section">
      <div className="container text-center">
        <h1>4 <img src="/images/pet_food_bowl.png" alt="Pet Food Bowl"/> 4</h1>
        <h2>Page Not Found</h2>
        <p>The link you clicked may be broken or the page <span className="d-md-block">may have been removed</span></p>
        <Link className="btn btn_primary" href="/"> <i className="fas fa-paw"></i> Home Page </Link>
      </div>
      <ul className="social_links unorder_list_center">
        <li><Link href="#!"><i className="fab fa-facebook-f"></i></Link></li>
        <li><Link href="#!"><i className="fab fa-instagram"></i></Link></li>
        <li><Link href="#!"><i className="fab fa-twitter"></i></Link></li>
        <li><Link href="#!"><i className="fab fa-whatsapp"></i></Link></li>
      </ul>
    </section>

    </>
  );
};
export default Error
