import { CardGradient } from '../Shared/Content';
import { FooterSocial } from '../Shared/Footer';
import { AppHeader } from '../Shared/Header'

export default function IndexPage() {
  return (<>

    <AppHeader user={{
      name: '',
      image: ''
    }} tabs={[]} />
    <CardGradient title={'test'} description={'test descriptions'} />
    <FooterSocial />
  </>
  );
}
