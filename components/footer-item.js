import { TextSm, TextBase, TextLg } from "../components/text";

export default function FooterItem({ title, children }) {
  return (
    <div className="p-4">
      <TextLg className="pb-2" bold>
        {title}
      </TextLg>
      {children}
    </div>
  );
}
