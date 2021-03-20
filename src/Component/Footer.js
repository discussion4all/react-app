import locationimg from "../Assest/images/map.png"
const Footer = () => {
    return (
        <footer className="blackColor">
            <div className="footer-container container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="footerSlider pointer">
                            <div className="footerlocationimg">
                                <img src={locationimg} />
                            </div>
                            <div className="footerIcon">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <div className="footer">
                                <h1 className="footertitle text-left">中環總辦事處</h1>
                                <h2 className="goldColor footersub text-left">中環站C出口</h2>
                                <p className="footersmall text-left">中環德輔道中88–98號
                                中環88 11樓全層</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footerSlider pointer">
                            <div className="footerlocationimg location1">
                                <img src={locationimg} />
                            </div>
                            <div className="footerIcon">
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                            </div>
                            <div className="footer">
                                <h1 className="footertitle text-left">中環考試中心</h1>
                                <h2 className="goldColor footersub text-left">中環站B出口</h2>
                                <p className="footersmall text-left">中環德輔道中113–125A號
                                遠東發展大廈17樓05室</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footerSlider">
                            <div className="footer">
                                <h2 className="goldColor footersub text-left">星期一至五</h2>
                                <p className="footersmall text-left">10:00a.m.-7:00p.m.</p>
                                <h2 className="goldColor footersub text-left">星期六</h2>
                                <p className="footersmall text-left">10:00a.m.-2:00p.m.</p>
                                <h2 className="goldColor footersub text-left">星期日及公眾假期休息</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footerSocial">
                            <a href="#" className="footerSocialicon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg></a>
                            <a href="#" className="footerSocialicon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M14.89 23.654c-7.367 3.367-18.802-18.86-11.601-22.615l2.107-1.039 3.492 6.817-2.082 1.026c-2.189 1.174 2.37 10.08 4.609 8.994.091-.041 2.057-1.007 2.064-1.011l3.521 6.795c-.008.004-1.989.978-2.11 1.033zm-1.538-13.409l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.058c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.187c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z" /></svg></a>
                            <a href="#" className="footerSocialicon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" /></svg></a>
                            <a href="#" className="footerSocialicon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></a>
                            <a href="#" className="footerSocialicon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg></a>
                            <a href="#" className="footerSocialicon"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;