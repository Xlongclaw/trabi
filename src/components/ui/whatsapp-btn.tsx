import Link from "next/link";

export default function WhatsappBtn() {
  return (
    <div className="fixed z-40 bottom-0 right-0">
      <div className="bg-green-700 p-3 m-4 rounded-full cursor-pointer">
        {/* <MessageCircle className="hover:scale-110" /> */}
        <Link target="_blank" href={"https://wa.me/8299196300"}>
          <img
            src="../wapp-icon.png"
            className="size-6 hover:scale-110"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
