function ContactForm() {
    return (
        <form action="https://formspree.io/f/mpzbbkvv" method="post"
              className="flex-column d-flex justify-content-center" id="contact-form">
            <div className="form-group flex-grow-1">
                <label htmlFor="name"></label><input type="text" id="name" name="name"
                                                     placeholder="Enter your name"
                                                     maxLength="30" required className="row"/>
            </div>
            <div className="form-group">
                <label htmlFor="mail"></label><input type="email" id="mail" name="mail"
                                                     placeholder="example@mail.com" required className="row"/>
            </div>
            <div className="form-group">
                <label htmlFor="message"></label><textarea id="message" name="message"
                                                           placeholder="Write your message here"
                                                           maxLength="500"
                                                           required className="row"></textarea>
            </div>
            <button type="submit" className="text-tertiary bg-secondary p-3 mt-1 mr-2 rounded-3xl hover:text-white font-bold w-fit focus:outline-0">Get In Touch</button>

        </form>
    )
}

export default ContactForm;