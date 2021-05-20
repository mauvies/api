import { IRepoResource, IOwnerResource } from './repos.interfaces';

export const reposPrepareResource = (ownerRepos: any): IRepoResource[] => {
  return ownerRepos
    .map(
      (repo: any): IRepoResource => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        language: repo.language,
        description: repo.description,
        cloneUrl: repo.clone_url,
        isFav: false,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
      })
    )
    .sort((a: IRepoResource, b: IRepoResource) =>
      a.updatedAt > b.updatedAt ? -1 : 1
    );
};

export const ownerPrepareResource = (
  ownerGeneralInfo: any,
  repos: any,
  page: number
): IOwnerResource => ({
  id: ownerGeneralInfo.id,
  name: ownerGeneralInfo.name,
  username: ownerGeneralInfo.login,
  avatar: ownerGeneralInfo.avatar_url,
  url: ownerGeneralInfo.html_url,
  type: ownerGeneralInfo.type,
  email: ownerGeneralInfo.email,
  bio: ownerGeneralInfo.bio,
  reposNumber: ownerGeneralInfo.public_repos,
  createdAt: ownerGeneralInfo.created_at,
  updatedAt: ownerGeneralInfo.updated_at,
  repos: repos,
  page,
});
