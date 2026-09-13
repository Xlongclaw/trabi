import Link from "next/link";

export default function WhatsappBtn() {
  return (
    <div className="fixed z-40 bottom-0 right-0">
      <div className="bg-green-700 p-2 m-4 rounded-md cursor-pointer">
        {/* <MessageCircle className="hover:scale-110" /> */}
        <Link target="_blank" href={"https://wa.me/8299196300"}>
          <img
            src="../wapp-icon.png"
            className="size-8 hover:scale-110"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
