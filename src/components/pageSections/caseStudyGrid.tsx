import PreviewCard from "../cards/previewCard";

const CaseStudyGrid = () => (
  <div className="grid grid-cols-1 gap-6 tablet-sm:grid-cols-2 tablet:grid-cols-3">
    <PreviewCard
      title="Design system chaos - Start at MoreApp"
      image="/images/case-studies/moreapp-thumbnail.png"
      href="/case-studies/moreapp"
    />
    <PreviewCard
      title="Switch between workspaces - MoreApp"
      image="/images/case-studies/workspaces/thumbnail.png"
      href="/case-studies/workspaces"
    />
    <PreviewCard
      title="Edit your form - MoreApp casestudy"
      image="/images/case-studies/formbuilder-thumbnail.png"
      href="/case-studies/form-builder"
    />
  </div>
);

export default CaseStudyGrid;
