import { FloatButton, FLoatButtons, PageWrapper } from "../../components/ui";

const Editor = () => {
  return (
    <PageWrapper>
      <FLoatButtons orientation="Vertical">
        <FloatButton
          iconName="site-alt"
          onClick={() => {
            console.log("object");
          }}
          text="Publish"
        />
        <FloatButton
          iconName="bookmark"
          onClick={() => {
            console.log("object");
          }}
          text="Save"
        />
      </FLoatButtons>
    </PageWrapper>
  );
};

export default Editor;
