type Route = {
  path: string;
  title?: string;
  isPublic?: boolean;
};

type Routes = {
  [key: string]: Route;
};

type Profile = {
  accessToken: string,
  refreshToken: string,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
}

type SubjectItem = {
  image?: string,
  content: string,
}
