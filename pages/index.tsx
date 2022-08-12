import { CardGradient } from '../Shared/Content';
import { FooterSocial } from '../Shared/Footer';
import { AppHeader } from '../Shared/Header'
import { content } from '../Modules/Home/content'

export default function IndexPage() {
  return (<>

    <AppHeader />
    <CardGradient title={'Description'} description={content} />
    <FooterSocial />
  </>
  );
}
