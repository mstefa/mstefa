import { LogoHexM } from "../../logo/LogoHexM";
import styles from "./section-title.module.scss";

export function SectionTitle({
  referenceId,
  children,
}: {
  referenceId: string;
  children: string;
}) {
  return (
    <h2 className={styles.sectionTitle} id={referenceId}>
      <LogoHexM size={28} />
      <span>{children}</span>
    </h2>
  );
}
