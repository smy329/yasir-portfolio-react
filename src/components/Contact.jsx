import { useRef, useState } from 'react';
import SectionBadge from './SectionBadge';
import { LiaEnvelopeSolid } from 'react-icons/lia';
import SectionTitle from './SectionTitle';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_pth6i55', 'template_bl7iewh', form.current, 'Cz6VpBcAp-ltXhjJt').then(
      (result) => {
        setIsLoading(false);
        toast.success('Hurreehh!! We are going to be join forces very soon');
        console.log(result);
      },
      (error) => {
        setIsLoading(false);
        console.log(error.text);
      }
    );
  };
  return (
    <div className="pt-[60px] pb-[90px]">
      <SectionBadge title={'Contact'} icon={<LiaEnvelopeSolid />} />
      <SectionTitle title={"Let's"} decorated={'Work Together'} />
      <h4 className="section-subtitle pb-14" data-aos="fade-up" data-aos-duration="1000">
        syed.mohammad.yasir329@gmail.com
      </h4>
      <form ref={form} onSubmit={sendEmail} data-aos="fade-up" data-aos-duration="1000">
        <div className="flex w-full">
          <div className="w-full mb-[34px] px-3">
            <label className="block text-sm mb-1  tracking-wider">
              FULL NAME<span className="text-red-500 text-lg font-semibold">*</span>
            </label>
            <input
              type="text"
              name="from_name"
              className="w-full h-14 rounded-lg bg-transparent border border-secondary text-secondary leading-[30px] tracking-wide text-lg px-3"
              placeholder="Please type yopur full name"
            />
          </div>

          <div className="w-full mb-[34px] px-3">
            <label className="block text-sm mb-1  tracking-wider">
              EMAIL<span className="text-red-500 text-lg font-semibold">*</span>
            </label>
            <input
              type="email"
              name="from_email"
              className="text-secondary w-full h-14 rounded-lg bg-transparent border border-secondary leading-[30px] tracking-wide text-lg p-3"
              placeholder="Please type your email address"
            />
          </div>
        </div>

        <div className="w-full mb-[34px] px-3">
          <label className="block text-sm mb-1  tracking-wider">MESSAGE</label>
          <textarea
            name="message"
            className="text-secondary w-full rounded-lg bg-transparent border border-secondary leading-[30px] tracking-wide text-lg p-3"
            rows="6"
            placeholder="Write your message here"
          />
        </div>
        <input
          type="submit"
          value={isLoading ? 'Sending...' : 'SEND MESSAGE'}
          className="bg-primary p-3 rounded-full cursor-pointer text-black w-full lg:w-2/5"
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default Contact;
