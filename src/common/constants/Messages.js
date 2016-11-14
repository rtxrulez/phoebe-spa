const $ = (() => {
    let i = 0;
    return () => 'id' + (i++);
})();

export const Messages = {
    FeatureEcma : $(),
    FeatureReactAndRedux : $(),
    FeatureReactRouter : $(),
    FeatureWebpack : $(),
    FeatureWatch : $(),
    FeatureRestart : $(),
    FeatureCssModules : $(),
    FeatureManyLoaders : $(),
    FeatureIntl : $(),
    FeatureFetchData : $(),
    FeatureTest : $(),
    FeatureCoverage : $(),
    FeatureLinter : $(),
    FeatureFlow : $(),
    FeatureMit : $(),
    PageFeatures : $(),
    PageLicense : $(),
    PageDetails : $(),
    PageLicenseCaptionMit : $(),
    PageLicenseCaptionCat : $(),
    LocaleTriggerEn : $(),
    LocaleTriggerRu : $()
};
