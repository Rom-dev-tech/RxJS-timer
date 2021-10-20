import Timer from 'components/Timer';
import Title from 'components/Title';
import PageContainer from 'components/PageContainer';

const TimerViews = () => {
  return (
    <PageContainer>
      <Title title="Timer" />
      <Timer ButtonsGroup={3} />
    </PageContainer>
  );
};

export default TimerViews;
