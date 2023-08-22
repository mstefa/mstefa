import { Icon } from "../../icon/Icon";
import styles from './section-title.module.scss'


export function  SectionTitle ({
  referenceId,
  children,
}: {
  referenceId: string
  children: string
}){
  
  return (  <h2 className={styles.sectionTitle} id={referenceId}> <Icon icon='paperPlane' size='medium'></Icon> &nbsp; {children}</h2>);
}
