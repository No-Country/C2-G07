import React from 'react';
import styles from './Footer.module.css';
import {
	GrFacebookOption,
	GrTwitter,
	GrLinkedinOption,
	GrDribbble,
} from 'react-icons/gr';

const Footer = () => {
	return (
		<footer className={styles.siteFooter}>
			<div className={styles.container}>
				<div className={styles.footerInfo}>
					<div className={styles.infoAbout}>
						<h6>Nosotros</h6>
						<p className={styles.textJustify}>
							conectARTE.com <i>ARTE PARA TODOS</i> Lorem ipsum, dolor sit amet
							consectetur adipisicing elit. Voluptatum, tenetur reprehenderit
							vero nobis repellat quis porro repellendus dolorem a nostrum
							blanditiis obcaecati molestiae facere odio unde quas totam iure
							aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Illo eius dicta accusantium eveniet distinctio deleniti vitae
							molestias, odio quos ut magni animi est quidem saepe facere quo
							officiis culpa earum.
						</p>
					</div>
					<div>
						<h6>Categorías</h6>
						<ul className={styles.footerLinks}>
							<li>
								<a href='/'>Pintura</a>
							</li>
							<li>
								<a href='/'>Diseño</a>
							</li>
							<li>
								<a href='/'>Fotografía</a>
							</li>
							<li>
								<a href='/'>Escultura</a>
							</li>
							<li>
								<a href='/'>Otros</a>
							</li>
						</ul>
					</div>
					<div>
						<h6>Links de interés</h6>
						<ul className={styles.footerLinks}>
							<li>
								<a href='http://scanfcode.com/contact/'>Contactanos</a>
							</li>
							<li>
								<a href='http://scanfcode.com/contribute-at-scanfcode/'>
									Contribuye / Registrate
								</a>
							</li>
							<li>
								<a href='http://scanfcode.com/privacy-policy/'>
									Política de privacidad
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.footerCRContainer}>
						<div>
							<p className={styles.copyrightText}>
								Copyright © 2022 All Rights Reserved by{' '}
								<a href='/'>conectARTE</a>.
							</p>
						</div>
						<ul className={styles.socialIcons}>
							<li>
								<a className={styles.facebook} href='/'>
									<GrFacebookOption />
								</a>
							</li>
							<li>
								<a className={styles.twitter} href='/'>
									<GrTwitter />
								</a>
							</li>
							<li>
								<a className={styles.dribbble} href='/'>
									<GrDribbble />
								</a>
							</li>
							<li>
								<a className={styles.linkedin} href='/'>
									<GrLinkedinOption />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
