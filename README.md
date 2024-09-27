## **Project 5 - Github Battle**

---

### **Description**

You have to consume github user, repository and few other api  and play with it. More description is give below. 

**API Usage**

All the API's are public api of github, i.e they don't require any authentication/ token for usage.

Github User API - 

[https://docs.github.com/en/free-pro-team@latest/rest/reference/users#get-a-user](https://docs.github.com/en/free-pro-team@latest/rest/reference/users#get-a-user)

Github Repository API - 

[https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repositories-for-a-user](https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-repositories-for-a-user) 

Github Search API -

[https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-repositories](https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-repositories)

**Part 1  ( Github Explore Page)**

---

- Create a HomePage having 2 buttons in NavBar with
    - Explore
    - Battle

- In this module we have to work on Explore page.
- Explore page is available on  /explore route.

- Display a nav to select the topic ("All", 'javascript', 'react', 'python', 'golang')
- Selecting/ Clicking on any of the topic showing the popular repositories of that topics sorted with max. number of stars. ( Can display max. 30 repositories )
- API that can be Used for it is :
[`https://api.github.com/search/repositories?q=stars:>1+language:golang&sort=stars&order=desc&type=Repositories`](https://api.github.com/search/repositories?q=stars:%3E1+language:golang&sort=stars&order=desc&type=Repositories)
- Replace keyword in this api endpoint which is currently written as 'golang' with the topic selected by user. (value with key as `stargazers_count` is the number of stars in the api response).

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/21796cff-c81e-468a-b49a-503b6f612924/Screenshot_2020-12-22_at_10.51.49_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/21796cff-c81e-468a-b49a-503b6f612924/Screenshot_2020-12-22_at_10.51.49_PM.png)

**Part 2 ( Github Battle Page)**

---

- Create  two input fields to ask for username and a button to submit.
- on Submit, get info about the user and repositories using github API.
- Use api data to calculate score for each user nad display winner/loser for the battle.

- Api that can be used for this purpose are:
    - `https://api.github.com/users/{username}` —> to get user profile info.
    - `[https://api.github.com/users/{username}/repos?per_page=100](https://api.github.com/users/{username}/repos?per_page=100)` —> to get list of repositories for user.

- once profile and repostiories data is available use it to calculate score based on `total_Score=profile_follower_count + total_stars_count_of_all_repos`

- Based on Score, display  result accordingly.

    UI mocks (for reference):

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6fd8524f-d033-4785-b5ec-f8ae482180c3/Screenshot_2020-12-22_at_10.52.01_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6fd8524f-d033-4785-b5ec-f8ae482180c3/Screenshot_2020-12-22_at_10.52.01_PM.png)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/207d9b31-68ef-4c9f-8e52-da2d04d3a6b7/Screenshot_2020-12-23_at_5.20.17_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/207d9b31-68ef-4c9f-8e52-da2d04d3a6b7/Screenshot_2020-12-23_at_5.20.17_PM.png)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04a03df6-7298-42f8-918a-d51adcd37ac9/Screenshot_2020-12-23_at_5.19.29_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04a03df6-7298-42f8-918a-d51adcd37ac9/Screenshot_2020-12-23_at_5.19.29_PM.png)
