const getPreviewPathname = (uid, { locale, document }): string => {
  const { slug } = document;

  switch (uid) {
    case "api::cough-news-item.cough-news-item":
      return `/cough-news/${slug}`;

    case "api::news-item.news-item":
      return `/news/${slug}`;
    case "api::insight.insight":
      return `/insights/${slug}`;
    case "api::white-paper.white-paper":
      return `/white-papers/${slug}`;
    case "api::cough-news-item.cough-news-item":
      return `/cough-news/${slug}`;
    case "api::publication.publication":
      return `/publications/${slug}`;
    default:
      return null;
  }
};

export default ({ env }) => {
  const clientUrl = env("CLIENT_URL");
  const previewSecret = env("PREVIEW_SECRET");

  return {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    apiToken: {
      salt: env("API_TOKEN_SALT"),
    },
    transfer: {
      token: {
        salt: env("TRANSFER_TOKEN_SALT"),
      },
    },
    secrets: {
      encryptionKey: env("ENCRYPTION_KEY"),
    },
    flags: {
      nps: env.bool("FLAG_NPS", true),
      promoteEE: env.bool("FLAG_PROMOTE_EE", true),
    },
    preview: {
      enabled: true,
      config: {
        allowedOrigins: clientUrl,
        async handler(uid, { documentId, locale, status }) {
          const document = await strapi
            .documents(uid)
            .findOne({ documentId, status });
          const pathname = getPreviewPathname(uid, { locale, document });

          if (!pathname) return null;

          const urlSearchParams = new URLSearchParams({
            url: pathname,
            secret: previewSecret,
            status,
          });

          return `${clientUrl}/api/preview/resource?${urlSearchParams}`;
        },
      },
    },
  };
};
