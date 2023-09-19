/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuthorUser = /* GraphQL */ `
  query GetAuthorUser($id: ID!) {
    getAuthorUser(id: $id) {
      id
      validated
      sub
      firstName
      lastName
      birthday
      email
      accessDocumentation
      setOtherAuthor
      unsubscribe
      unsubscribeData
      identity
      phone
      cellPhone
      gender
      address
      allowDoc
      city
      zip
      status
      authors {
        items {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      drafts {
        items {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAuthorUsers = /* GraphQL */ `
  query ListAuthorUsers(
    $id: ID
    $filter: ModelAuthorUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAuthorUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        validated
        sub
        firstName
        lastName
        birthday
        email
        accessDocumentation
        setOtherAuthor
        unsubscribe
        unsubscribeData
        identity
        phone
        cellPhone
        gender
        address
        allowDoc
        city
        zip
        status
        authors {
          nextToken
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      sub
      name
      firstName
      email
      gender
      birthdate
      avatar
      avatarKeys
      avatarTemp
      avatarData
      biography
      homeWeight
      familyWeight
      categoryWeight
      followCount
      status
      authorUserID
      authorUser {
        id
        validated
        sub
        firstName
        lastName
        birthday
        email
        accessDocumentation
        setOtherAuthor
        unsubscribe
        unsubscribeData
        identity
        phone
        cellPhone
        gender
        address
        allowDoc
        city
        zip
        status
        authors {
          nextToken
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      drafts {
        items {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      books {
        items {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      followAuthors {
        items {
          id
          sub
          authorSub
          like
          status
          readerUserID
          authorID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      notifyFollowers {
        items {
          id
          sub
          authorSub
          status
          readerUserID
          authorID
          bookID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $id: ID
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAuthors(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sub
        name
        firstName
        email
        gender
        birthdate
        avatar
        avatarKeys
        avatarTemp
        avatarData
        biography
        homeWeight
        familyWeight
        categoryWeight
        followCount
        status
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDraft = /* GraphQL */ `
  query GetDraft($id: ID!) {
    getDraft(id: $id) {
      id
      sub
      title
      description
      summary
      cover
      coverFile {
        bucket
        region
        key
        __typename
      }
      coverKeys
      coverTemp
      coverData
      epub
      epubFile {
        bucket
        region
        key
        __typename
      }
      epubTempURL
      freeEpub
      epubData
      freeEpubData
      freeEpubFile {
        bucket
        region
        key
        __typename
      }
      status
      bookType
      history
      price
      isbn
      content
      audioPreview
      authorUserID
      authorUser {
        id
        validated
        sub
        firstName
        lastName
        birthday
        email
        accessDocumentation
        setOtherAuthor
        unsubscribe
        unsubscribeData
        identity
        phone
        cellPhone
        gender
        address
        allowDoc
        city
        zip
        status
        authors {
          nextToken
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      authorID
      author {
        id
        sub
        name
        firstName
        email
        gender
        birthdate
        avatar
        avatarKeys
        avatarTemp
        avatarData
        biography
        homeWeight
        familyWeight
        categoryWeight
        followCount
        status
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      draftContents {
        items {
          id
          sub
          order
          label
          title
          freeText
          freeAudio
          freeAudioData
          adminAudioData
          text
          audio
          audioData
          audioTempURL
          draftID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      familyID
      family {
        id
        name
        title
        description
        icon
        iconKeys
        content
        parameters
        appVersion
        active
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        subCategories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      categoryID
      category {
        id
        name
        title
        description
        content
        order
        parameters
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        active
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        subCategories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      subCategoryID
      subCategory {
        id
        name
        title
        description
        content
        order
        parameters
        active
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      books {
        items {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDrafts = /* GraphQL */ `
  query ListDrafts(
    $id: ID
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDrafts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sub
        title
        description
        summary
        cover
        coverFile {
          bucket
          region
          key
          __typename
        }
        coverKeys
        coverTemp
        coverData
        epub
        epubFile {
          bucket
          region
          key
          __typename
        }
        epubTempURL
        freeEpub
        epubData
        freeEpubData
        freeEpubFile {
          bucket
          region
          key
          __typename
        }
        status
        bookType
        history
        price
        isbn
        content
        audioPreview
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        draftContents {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDraftContent = /* GraphQL */ `
  query GetDraftContent($id: ID!) {
    getDraftContent(id: $id) {
      id
      sub
      order
      label
      title
      freeText
      freeAudio
      freeAudioData
      adminAudioData
      text
      audio
      audioFile {
        bucket
        region
        key
        __typename
      }
      audioData
      audioTempURL
      draftID
      draft {
        id
        sub
        title
        description
        summary
        cover
        coverFile {
          bucket
          region
          key
          __typename
        }
        coverKeys
        coverTemp
        coverData
        epub
        epubFile {
          bucket
          region
          key
          __typename
        }
        epubTempURL
        freeEpub
        epubData
        freeEpubData
        freeEpubFile {
          bucket
          region
          key
          __typename
        }
        status
        bookType
        history
        price
        isbn
        content
        audioPreview
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        draftContents {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDraftContents = /* GraphQL */ `
  query ListDraftContents(
    $id: ID
    $filter: ModelDraftContentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDraftContents(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sub
        order
        label
        title
        freeText
        freeAudio
        freeAudioData
        adminAudioData
        text
        audio
        audioFile {
          bucket
          region
          key
          __typename
        }
        audioData
        audioTempURL
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      sub
      title
      description
      summary
      homeWeight
      familyWeight
      categoryWeight
      cover
      coverKeys
      coverData
      isbn
      coverFile {
        bucket
        region
        key
        __typename
      }
      epub
      freeEpub
      epubData
      freeEpubData
      adminEpub
      adminEpubData
      status
      bookType
      rating
      ratingCount
      likesCount
      purchasedCount
      purchasedAmount
      price
      discount
      contents
      audioPreview
      draftID
      draft {
        id
        sub
        title
        description
        summary
        cover
        coverFile {
          bucket
          region
          key
          __typename
        }
        coverKeys
        coverTemp
        coverData
        epub
        epubFile {
          bucket
          region
          key
          __typename
        }
        epubTempURL
        freeEpub
        epubData
        freeEpubData
        freeEpubFile {
          bucket
          region
          key
          __typename
        }
        status
        bookType
        history
        price
        isbn
        content
        audioPreview
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        draftContents {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      authorID
      author {
        id
        sub
        name
        firstName
        email
        gender
        birthdate
        avatar
        avatarKeys
        avatarTemp
        avatarData
        biography
        homeWeight
        familyWeight
        categoryWeight
        followCount
        status
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      bookContents {
        items {
          id
          sub
          order
          label
          title
          freeText
          freeAudio
          freeAudioData
          adminAudioData
          text
          audio
          audioData
          bookID
          draftContentID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      purchases {
        items {
          id
          sub
          authorSub
          status
          unused
          rating
          current
          result
          identity
          buyer
          epub
          bookVersion
          bookUpdate
          amount
          readerUserID
          bookID
          paymentID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookLikes {
        items {
          id
          sub
          authorSub
          bookVersion
          bookUpdate
          like
          status
          readerUserID
          bookID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookRatings {
        items {
          id
          sub
          authorSub
          bookVersion
          bookUpdate
          rating
          readerUserID
          bookID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      notifyFollowers {
        items {
          id
          sub
          authorSub
          status
          readerUserID
          authorID
          bookID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      familyID
      family {
        id
        name
        title
        description
        icon
        iconKeys
        content
        parameters
        appVersion
        active
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        subCategories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      categoryID
      category {
        id
        name
        title
        description
        content
        order
        parameters
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        active
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        subCategories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      subCategoryID
      subCategory {
        id
        name
        title
        description
        content
        order
        parameters
        active
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $id: ID
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBooks(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBookContent = /* GraphQL */ `
  query GetBookContent($id: ID!) {
    getBookContent(id: $id) {
      id
      sub
      order
      label
      title
      freeText
      freeAudio
      freeAudioData
      adminAudioData
      text
      audio
      audioData
      bookID
      book {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      draftContentID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBookContents = /* GraphQL */ `
  query ListBookContents(
    $id: ID
    $filter: ModelBookContentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBookContents(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sub
        order
        label
        title
        freeText
        freeAudio
        freeAudioData
        adminAudioData
        text
        audio
        audioData
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        draftContentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReaderUser = /* GraphQL */ `
  query GetReaderUser($id: ID!) {
    getReaderUser(id: $id) {
      id
      sub
      firstName
      lastName
      avatar
      avatarKeys
      avatarData
      birthday
      email
      phone
      cellPhone
      tokens {
        device
        token
        __typename
      }
      gender
      address
      city
      zip
      country
      status
      unsubscribe
      unsubscribeData
      credits
      refills {
        items {
          id
          sub
          readerUserID
          paymentType
          paymentId
          payload
          response
          confirmation
          amount
          status
          transfered
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      purchases {
        items {
          id
          sub
          authorSub
          status
          unused
          rating
          current
          result
          identity
          buyer
          epub
          bookVersion
          bookUpdate
          amount
          readerUserID
          bookID
          paymentID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookLikes {
        items {
          id
          sub
          authorSub
          bookVersion
          bookUpdate
          like
          status
          readerUserID
          bookID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookRatings {
        items {
          id
          sub
          authorSub
          bookVersion
          bookUpdate
          rating
          readerUserID
          bookID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      followAuthors {
        items {
          id
          sub
          authorSub
          like
          status
          readerUserID
          authorID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      notifyFollowers {
        items {
          id
          sub
          authorSub
          status
          readerUserID
          authorID
          bookID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReaderUsers = /* GraphQL */ `
  query ListReaderUsers(
    $id: ID
    $filter: ModelReaderUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReaderUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sub
        firstName
        lastName
        avatar
        avatarKeys
        avatarData
        birthday
        email
        phone
        cellPhone
        tokens {
          device
          token
          __typename
        }
        gender
        address
        city
        zip
        country
        status
        unsubscribe
        unsubscribeData
        credits
        refills {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRefill = /* GraphQL */ `
  query GetRefill($id: ID!) {
    getRefill(id: $id) {
      id
      sub
      readerUserID
      readerUser {
        id
        sub
        firstName
        lastName
        avatar
        avatarKeys
        avatarData
        birthday
        email
        phone
        cellPhone
        tokens {
          device
          token
          __typename
        }
        gender
        address
        city
        zip
        country
        status
        unsubscribe
        unsubscribeData
        credits
        refills {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      paymentType
      paymentId
      payload
      response
      confirmation
      amount
      status
      transfered
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRefills = /* GraphQL */ `
  query ListRefills(
    $filter: ModelRefillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRefills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        paymentType
        paymentId
        payload
        response
        confirmation
        amount
        status
        transfered
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPurchase = /* GraphQL */ `
  query GetPurchase($id: ID!) {
    getPurchase(id: $id) {
      id
      sub
      authorSub
      status
      unused
      rating
      current
      result
      identity
      buyer
      epub
      bookVersion
      bookUpdate
      amount
      readerUserID
      readerUser {
        id
        sub
        firstName
        lastName
        avatar
        avatarKeys
        avatarData
        birthday
        email
        phone
        cellPhone
        tokens {
          device
          token
          __typename
        }
        gender
        address
        city
        zip
        country
        status
        unsubscribe
        unsubscribeData
        credits
        refills {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      bookID
      book {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      purchasedContents {
        items {
          id
          sub
          order
          label
          title
          text
          audio
          audioData
          tempURL
          bookContentID
          purchaseID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      paymentID
      payment {
        id
        sub
        amount
        made
        parameters
        transactionType
        transactionId
        note
        date
        purchases {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPurchases = /* GraphQL */ `
  query ListPurchases(
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        authorSub
        status
        unused
        rating
        current
        result
        identity
        buyer
        epub
        bookVersion
        bookUpdate
        amount
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        purchasedContents {
          nextToken
          __typename
        }
        paymentID
        payment {
          id
          sub
          amount
          made
          parameters
          transactionType
          transactionId
          note
          date
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPurchasedContent = /* GraphQL */ `
  query GetPurchasedContent($id: ID!) {
    getPurchasedContent(id: $id) {
      id
      sub
      order
      label
      title
      text
      audio
      audioData
      tempURL
      bookContentID
      purchaseID
      purchase {
        id
        sub
        authorSub
        status
        unused
        rating
        current
        result
        identity
        buyer
        epub
        bookVersion
        bookUpdate
        amount
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        purchasedContents {
          nextToken
          __typename
        }
        paymentID
        payment {
          id
          sub
          amount
          made
          parameters
          transactionType
          transactionId
          note
          date
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPurchasedContents = /* GraphQL */ `
  query ListPurchasedContents(
    $id: ID
    $filter: ModelPurchasedContentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPurchasedContents(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sub
        order
        label
        title
        text
        audio
        audioData
        tempURL
        bookContentID
        purchaseID
        purchase {
          id
          sub
          authorSub
          status
          unused
          rating
          current
          result
          identity
          buyer
          epub
          bookVersion
          bookUpdate
          amount
          readerUserID
          bookID
          paymentID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBookRating = /* GraphQL */ `
  query GetBookRating($id: ID!) {
    getBookRating(id: $id) {
      id
      sub
      authorSub
      bookVersion
      bookUpdate
      rating
      readerUserID
      readerUser {
        id
        sub
        firstName
        lastName
        avatar
        avatarKeys
        avatarData
        birthday
        email
        phone
        cellPhone
        tokens {
          device
          token
          __typename
        }
        gender
        address
        city
        zip
        country
        status
        unsubscribe
        unsubscribeData
        credits
        refills {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      bookID
      book {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBookRatings = /* GraphQL */ `
  query ListBookRatings(
    $filter: ModelBookRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        authorSub
        bookVersion
        bookUpdate
        rating
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBookLike = /* GraphQL */ `
  query GetBookLike($id: ID!) {
    getBookLike(id: $id) {
      id
      sub
      authorSub
      bookVersion
      bookUpdate
      like
      status
      readerUserID
      readerUser {
        id
        sub
        firstName
        lastName
        avatar
        avatarKeys
        avatarData
        birthday
        email
        phone
        cellPhone
        tokens {
          device
          token
          __typename
        }
        gender
        address
        city
        zip
        country
        status
        unsubscribe
        unsubscribeData
        credits
        refills {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      bookID
      book {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBookLikes = /* GraphQL */ `
  query ListBookLikes(
    $filter: ModelBookLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        authorSub
        bookVersion
        bookUpdate
        like
        status
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFollowAuthor = /* GraphQL */ `
  query GetFollowAuthor($id: ID!) {
    getFollowAuthor(id: $id) {
      id
      sub
      authorSub
      like
      status
      readerUserID
      readerUser {
        id
        sub
        firstName
        lastName
        avatar
        avatarKeys
        avatarData
        birthday
        email
        phone
        cellPhone
        tokens {
          device
          token
          __typename
        }
        gender
        address
        city
        zip
        country
        status
        unsubscribe
        unsubscribeData
        credits
        refills {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      authorID
      author {
        id
        sub
        name
        firstName
        email
        gender
        birthdate
        avatar
        avatarKeys
        avatarTemp
        avatarData
        biography
        homeWeight
        familyWeight
        categoryWeight
        followCount
        status
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFollowAuthors = /* GraphQL */ `
  query ListFollowAuthors(
    $filter: ModelFollowAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        authorSub
        like
        status
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotifyFollower = /* GraphQL */ `
  query GetNotifyFollower($id: ID!) {
    getNotifyFollower(id: $id) {
      id
      sub
      authorSub
      status
      readerUserID
      readerUser {
        id
        sub
        firstName
        lastName
        avatar
        avatarKeys
        avatarData
        birthday
        email
        phone
        cellPhone
        tokens {
          device
          token
          __typename
        }
        gender
        address
        city
        zip
        country
        status
        unsubscribe
        unsubscribeData
        credits
        refills {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      authorID
      author {
        id
        sub
        name
        firstName
        email
        gender
        birthdate
        avatar
        avatarKeys
        avatarTemp
        avatarData
        biography
        homeWeight
        familyWeight
        categoryWeight
        followCount
        status
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      bookID
      book {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotifyFollowers = /* GraphQL */ `
  query ListNotifyFollowers(
    $filter: ModelNotifyFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifyFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        authorSub
        status
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      id
      sub
      amount
      made
      parameters
      transactionType
      transactionId
      note
      date
      purchases {
        items {
          id
          sub
          authorSub
          status
          unused
          rating
          current
          result
          identity
          buyer
          epub
          bookVersion
          bookUpdate
          amount
          readerUserID
          bookID
          paymentID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        amount
        made
        parameters
        transactionType
        transactionId
        note
        date
        purchases {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
      id
      name
      title
      description
      icon
      iconKeys
      content
      parameters
      appVersion
      active
      drafts {
        items {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      books {
        items {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      categories {
        items {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      subCategories {
        items {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFamilies = /* GraphQL */ `
  query ListFamilies(
    $id: ID
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFamilies(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        title
        description
        icon
        iconKeys
        content
        parameters
        appVersion
        active
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        subCategories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      title
      description
      content
      order
      parameters
      familyID
      family {
        id
        name
        title
        description
        icon
        iconKeys
        content
        parameters
        appVersion
        active
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        subCategories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      active
      drafts {
        items {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      books {
        items {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      subCategories {
        items {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $id: ID
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        title
        description
        content
        order
        parameters
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        active
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        subCategories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubCategory = /* GraphQL */ `
  query GetSubCategory($id: ID!) {
    getSubCategory(id: $id) {
      id
      name
      title
      description
      content
      order
      parameters
      active
      familyID
      family {
        id
        name
        title
        description
        icon
        iconKeys
        content
        parameters
        appVersion
        active
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        categories {
          nextToken
          __typename
        }
        subCategories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      categoryID
      category {
        id
        name
        title
        description
        content
        order
        parameters
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        active
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        subCategories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      drafts {
        items {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      books {
        items {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSubCategories = /* GraphQL */ `
  query ListSubCategories(
    $id: ID
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSubCategories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        title
        description
        content
        order
        parameters
        active
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
      id
      title
      phoneNumber
      fixeNumber
      description
      address
      students {
        items {
          id
          firstName
          lastName
          phoneNumber
          email
          matricule
          birthday
          address
          schoolID
          studentGroupID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      toTeachs {
        items {
          id
          status
          date
          teacherID
          schoolID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      schoolUsers {
        items {
          id
          sub
          firstName
          lastName
          email
          phoneNumber
          address
          status
          schoolREF
          schoolID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $id: ID
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSchools(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        phoneNumber
        fixeNumber
        description
        address
        students {
          nextToken
          __typename
        }
        toTeachs {
          nextToken
          __typename
        }
        schoolUsers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSchoolUser = /* GraphQL */ `
  query GetSchoolUser($id: ID!) {
    getSchoolUser(id: $id) {
      id
      sub
      firstName
      lastName
      email
      phoneNumber
      address
      status
      schoolREF
      schoolID
      school {
        id
        title
        phoneNumber
        fixeNumber
        description
        address
        students {
          nextToken
          __typename
        }
        toTeachs {
          nextToken
          __typename
        }
        schoolUsers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSchoolUsers = /* GraphQL */ `
  query ListSchoolUsers(
    $id: ID
    $filter: ModelSchoolUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSchoolUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        sub
        firstName
        lastName
        email
        phoneNumber
        address
        status
        schoolREF
        schoolID
        school {
          id
          title
          phoneNumber
          fixeNumber
          description
          address
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      firstName
      lastName
      phoneNumber
      email
      matricule
      birthday
      address
      schoolID
      school {
        id
        title
        phoneNumber
        fixeNumber
        description
        address
        students {
          nextToken
          __typename
        }
        toTeachs {
          nextToken
          __typename
        }
        schoolUsers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      studentGroupID
      studentGroup {
        id
        title
        description
        students {
          nextToken
          __typename
        }
        courses {
          nextToken
          __typename
        }
        liveCourses {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      schoolSubscriptions {
        items {
          id
          title
          amount
          dateStart
          dateEnd
          studentID
          schoolYearID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $id: ID
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStudents(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        firstName
        lastName
        phoneNumber
        email
        matricule
        birthday
        address
        schoolID
        school {
          id
          title
          phoneNumber
          fixeNumber
          description
          address
          createdAt
          updatedAt
          __typename
        }
        studentGroupID
        studentGroup {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        schoolSubscriptions {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSchoolYear = /* GraphQL */ `
  query GetSchoolYear($id: ID!) {
    getSchoolYear(id: $id) {
      id
      title
      description
      schoolSubscriptions {
        items {
          id
          title
          amount
          dateStart
          dateEnd
          studentID
          schoolYearID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSchoolYears = /* GraphQL */ `
  query ListSchoolYears(
    $id: ID
    $filter: ModelSchoolYearFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSchoolYears(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        description
        schoolSubscriptions {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSchoolSubscription = /* GraphQL */ `
  query GetSchoolSubscription($id: ID!) {
    getSchoolSubscription(id: $id) {
      id
      title
      amount
      dateStart
      dateEnd
      studentID
      student {
        id
        firstName
        lastName
        phoneNumber
        email
        matricule
        birthday
        address
        schoolID
        school {
          id
          title
          phoneNumber
          fixeNumber
          description
          address
          createdAt
          updatedAt
          __typename
        }
        studentGroupID
        studentGroup {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        schoolSubscriptions {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      schoolYearID
      schoolYear {
        id
        title
        description
        schoolSubscriptions {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSchoolSubscriptions = /* GraphQL */ `
  query ListSchoolSubscriptions(
    $id: ID
    $filter: ModelSchoolSubscriptionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSchoolSubscriptions(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        amount
        dateStart
        dateEnd
        studentID
        student {
          id
          firstName
          lastName
          phoneNumber
          email
          matricule
          birthday
          address
          schoolID
          studentGroupID
          createdAt
          updatedAt
          __typename
        }
        schoolYearID
        schoolYear {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
      id
      firstName
      lastName
      phoneNumber
      email
      sphoneNumber
      address
      courses {
        items {
          id
          title
          docs
          description
          teacherID
          studentGroupID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      liveCourses {
        items {
          id
          title
          dateStart
          dateEnd
          status
          teacherID
          studentGroupID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      toTeachs {
        items {
          id
          status
          date
          teacherID
          schoolID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $id: ID
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTeachers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        firstName
        lastName
        phoneNumber
        email
        sphoneNumber
        address
        courses {
          nextToken
          __typename
        }
        liveCourses {
          nextToken
          __typename
        }
        toTeachs {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudentGroup = /* GraphQL */ `
  query GetStudentGroup($id: ID!) {
    getStudentGroup(id: $id) {
      id
      title
      description
      students {
        items {
          id
          firstName
          lastName
          phoneNumber
          email
          matricule
          birthday
          address
          schoolID
          studentGroupID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      courses {
        items {
          id
          title
          docs
          description
          teacherID
          studentGroupID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      liveCourses {
        items {
          id
          title
          dateStart
          dateEnd
          status
          teacherID
          studentGroupID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStudentGroups = /* GraphQL */ `
  query ListStudentGroups(
    $id: ID
    $filter: ModelStudentGroupFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStudentGroups(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        description
        students {
          nextToken
          __typename
        }
        courses {
          nextToken
          __typename
        }
        liveCourses {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      docs
      description
      teacherID
      teacher {
        id
        firstName
        lastName
        phoneNumber
        email
        sphoneNumber
        address
        courses {
          nextToken
          __typename
        }
        liveCourses {
          nextToken
          __typename
        }
        toTeachs {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      studentGroupID
      studentgroup {
        id
        title
        description
        students {
          nextToken
          __typename
        }
        courses {
          nextToken
          __typename
        }
        liveCourses {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $id: ID
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCourses(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        docs
        description
        teacherID
        teacher {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        studentGroupID
        studentgroup {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLiveCourse = /* GraphQL */ `
  query GetLiveCourse($id: ID!) {
    getLiveCourse(id: $id) {
      id
      title
      dateStart
      dateEnd
      status
      teacherID
      teacher {
        id
        firstName
        lastName
        phoneNumber
        email
        sphoneNumber
        address
        courses {
          nextToken
          __typename
        }
        liveCourses {
          nextToken
          __typename
        }
        toTeachs {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      studentGroupID
      studentGroup {
        id
        title
        description
        students {
          nextToken
          __typename
        }
        courses {
          nextToken
          __typename
        }
        liveCourses {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLiveCourses = /* GraphQL */ `
  query ListLiveCourses(
    $id: ID
    $filter: ModelLiveCourseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLiveCourses(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        dateStart
        dateEnd
        status
        teacherID
        teacher {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        studentGroupID
        studentGroup {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getToTeach = /* GraphQL */ `
  query GetToTeach($id: ID!) {
    getToTeach(id: $id) {
      id
      status
      date
      teacherID
      teacher {
        id
        firstName
        lastName
        phoneNumber
        email
        sphoneNumber
        address
        courses {
          nextToken
          __typename
        }
        liveCourses {
          nextToken
          __typename
        }
        toTeachs {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      schoolID
      school {
        id
        title
        phoneNumber
        fixeNumber
        description
        address
        students {
          nextToken
          __typename
        }
        toTeachs {
          nextToken
          __typename
        }
        schoolUsers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listToTeaches = /* GraphQL */ `
  query ListToTeaches(
    $id: ID
    $filter: ModelToTeachFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listToTeaches(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        status
        date
        teacherID
        teacher {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        schoolID
        school {
          id
          title
          phoneNumber
          fixeNumber
          description
          address
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      description
      prices {
        items {
          id
          title
          amount
          description
          ProductID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      orderLines {
        items {
          id
          amount
          productID
          orderID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $id: ID
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        description
        prices {
          nextToken
          __typename
        }
        orderLines {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPrice = /* GraphQL */ `
  query GetPrice($id: ID!) {
    getPrice(id: $id) {
      id
      title
      amount
      description
      ProductID
      product {
        id
        title
        description
        prices {
          nextToken
          __typename
        }
        orderLines {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPrices = /* GraphQL */ `
  query ListPrices(
    $id: ID
    $filter: ModelPriceFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPrices(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        amount
        description
        ProductID
        product {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      firstName
      lastName
      phoneNumber
      email
      sphoneNumber
      address
      orders {
        items {
          id
          title
          description
          amount
          ClientID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $id: ID
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listClients(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        firstName
        lastName
        phoneNumber
        email
        sphoneNumber
        address
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      title
      description
      amount
      ClientID
      client {
        id
        firstName
        lastName
        phoneNumber
        email
        sphoneNumber
        address
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      orderLines {
        items {
          id
          amount
          productID
          orderID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: ID
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        description
        amount
        ClientID
        client {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        orderLines {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderLine = /* GraphQL */ `
  query GetOrderLine($id: ID!) {
    getOrderLine(id: $id) {
      id
      amount
      productID
      product {
        id
        title
        description
        prices {
          nextToken
          __typename
        }
        orderLines {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      orderID
      order {
        id
        title
        description
        amount
        ClientID
        client {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        orderLines {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderLines = /* GraphQL */ `
  query ListOrderLines(
    $id: ID
    $filter: ModelOrderLineFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrderLines(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        amount
        productID
        product {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        orderID
        order {
          id
          title
          description
          amount
          ClientID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const authorsByStatus = /* GraphQL */ `
  query AuthorsByStatus(
    $status: AuthorStatus!
    $sortDirection: ModelSortDirection
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    authorsByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        name
        firstName
        email
        gender
        birthdate
        avatar
        avatarKeys
        avatarTemp
        avatarData
        biography
        homeWeight
        familyWeight
        categoryWeight
        followCount
        status
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const authorsByAuthorUserID = /* GraphQL */ `
  query AuthorsByAuthorUserID(
    $authorUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    authorsByAuthorUserID(
      authorUserID: $authorUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        name
        firstName
        email
        gender
        birthdate
        avatar
        avatarKeys
        avatarTemp
        avatarData
        biography
        homeWeight
        familyWeight
        categoryWeight
        followCount
        status
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        followAuthors {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const draftsByStatus = /* GraphQL */ `
  query DraftsByStatus(
    $status: BookStatus!
    $sortDirection: ModelSortDirection
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    draftsByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        cover
        coverFile {
          bucket
          region
          key
          __typename
        }
        coverKeys
        coverTemp
        coverData
        epub
        epubFile {
          bucket
          region
          key
          __typename
        }
        epubTempURL
        freeEpub
        epubData
        freeEpubData
        freeEpubFile {
          bucket
          region
          key
          __typename
        }
        status
        bookType
        history
        price
        isbn
        content
        audioPreview
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        draftContents {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const draftsByBookType = /* GraphQL */ `
  query DraftsByBookType(
    $bookType: BookType!
    $sortDirection: ModelSortDirection
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    draftsByBookType(
      bookType: $bookType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        cover
        coverFile {
          bucket
          region
          key
          __typename
        }
        coverKeys
        coverTemp
        coverData
        epub
        epubFile {
          bucket
          region
          key
          __typename
        }
        epubTempURL
        freeEpub
        epubData
        freeEpubData
        freeEpubFile {
          bucket
          region
          key
          __typename
        }
        status
        bookType
        history
        price
        isbn
        content
        audioPreview
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        draftContents {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const draftsByAuthorUserID = /* GraphQL */ `
  query DraftsByAuthorUserID(
    $authorUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    draftsByAuthorUserID(
      authorUserID: $authorUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        cover
        coverFile {
          bucket
          region
          key
          __typename
        }
        coverKeys
        coverTemp
        coverData
        epub
        epubFile {
          bucket
          region
          key
          __typename
        }
        epubTempURL
        freeEpub
        epubData
        freeEpubData
        freeEpubFile {
          bucket
          region
          key
          __typename
        }
        status
        bookType
        history
        price
        isbn
        content
        audioPreview
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        draftContents {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const draftsByAuthorID = /* GraphQL */ `
  query DraftsByAuthorID(
    $authorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    draftsByAuthorID(
      authorID: $authorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        cover
        coverFile {
          bucket
          region
          key
          __typename
        }
        coverKeys
        coverTemp
        coverData
        epub
        epubFile {
          bucket
          region
          key
          __typename
        }
        epubTempURL
        freeEpub
        epubData
        freeEpubData
        freeEpubFile {
          bucket
          region
          key
          __typename
        }
        status
        bookType
        history
        price
        isbn
        content
        audioPreview
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        draftContents {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const draftsByFamilyID = /* GraphQL */ `
  query DraftsByFamilyID(
    $familyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    draftsByFamilyID(
      familyID: $familyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        cover
        coverFile {
          bucket
          region
          key
          __typename
        }
        coverKeys
        coverTemp
        coverData
        epub
        epubFile {
          bucket
          region
          key
          __typename
        }
        epubTempURL
        freeEpub
        epubData
        freeEpubData
        freeEpubFile {
          bucket
          region
          key
          __typename
        }
        status
        bookType
        history
        price
        isbn
        content
        audioPreview
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        draftContents {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const draftsByCategoryID = /* GraphQL */ `
  query DraftsByCategoryID(
    $categoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    draftsByCategoryID(
      categoryID: $categoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        cover
        coverFile {
          bucket
          region
          key
          __typename
        }
        coverKeys
        coverTemp
        coverData
        epub
        epubFile {
          bucket
          region
          key
          __typename
        }
        epubTempURL
        freeEpub
        epubData
        freeEpubData
        freeEpubFile {
          bucket
          region
          key
          __typename
        }
        status
        bookType
        history
        price
        isbn
        content
        audioPreview
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        draftContents {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const draftsBySubCategoryID = /* GraphQL */ `
  query DraftsBySubCategoryID(
    $subCategoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDraftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    draftsBySubCategoryID(
      subCategoryID: $subCategoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        cover
        coverFile {
          bucket
          region
          key
          __typename
        }
        coverKeys
        coverTemp
        coverData
        epub
        epubFile {
          bucket
          region
          key
          __typename
        }
        epubTempURL
        freeEpub
        epubData
        freeEpubData
        freeEpubFile {
          bucket
          region
          key
          __typename
        }
        status
        bookType
        history
        price
        isbn
        content
        audioPreview
        authorUserID
        authorUser {
          id
          validated
          sub
          firstName
          lastName
          birthday
          email
          accessDocumentation
          setOtherAuthor
          unsubscribe
          unsubscribeData
          identity
          phone
          cellPhone
          gender
          address
          allowDoc
          city
          zip
          status
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        draftContents {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const draftContentsByDraftID = /* GraphQL */ `
  query DraftContentsByDraftID(
    $draftID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDraftContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    draftContentsByDraftID(
      draftID: $draftID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        order
        label
        title
        freeText
        freeAudio
        freeAudioData
        adminAudioData
        text
        audio
        audioFile {
          bucket
          region
          key
          __typename
        }
        audioData
        audioTempURL
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const booksByStatus = /* GraphQL */ `
  query BooksByStatus(
    $status: BookStatus!
    $sortDirection: ModelSortDirection
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    booksByStatus(
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const booksByBookType = /* GraphQL */ `
  query BooksByBookType(
    $bookType: BookType!
    $sortDirection: ModelSortDirection
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    booksByBookType(
      bookType: $bookType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const booksByDraftID = /* GraphQL */ `
  query BooksByDraftID(
    $draftID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    booksByDraftID(
      draftID: $draftID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const booksByAuthorID = /* GraphQL */ `
  query BooksByAuthorID(
    $authorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    booksByAuthorID(
      authorID: $authorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const booksByFamilyID = /* GraphQL */ `
  query BooksByFamilyID(
    $familyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    booksByFamilyID(
      familyID: $familyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const booksByCategoryID = /* GraphQL */ `
  query BooksByCategoryID(
    $categoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    booksByCategoryID(
      categoryID: $categoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const booksBySubCategoryID = /* GraphQL */ `
  query BooksBySubCategoryID(
    $subCategoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    booksBySubCategoryID(
      subCategoryID: $subCategoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        title
        description
        summary
        homeWeight
        familyWeight
        categoryWeight
        cover
        coverKeys
        coverData
        isbn
        coverFile {
          bucket
          region
          key
          __typename
        }
        epub
        freeEpub
        epubData
        freeEpubData
        adminEpub
        adminEpubData
        status
        bookType
        rating
        ratingCount
        likesCount
        purchasedCount
        purchasedAmount
        price
        discount
        contents
        audioPreview
        draftID
        draft {
          id
          sub
          title
          description
          summary
          cover
          coverKeys
          coverTemp
          coverData
          epub
          epubTempURL
          freeEpub
          epubData
          freeEpubData
          status
          bookType
          history
          price
          isbn
          content
          audioPreview
          authorUserID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookContents {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        bookLikes {
          nextToken
          __typename
        }
        bookRatings {
          nextToken
          __typename
        }
        notifyFollowers {
          nextToken
          __typename
        }
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        subCategoryID
        subCategory {
          id
          name
          title
          description
          content
          order
          parameters
          active
          familyID
          categoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookContentsByBookID = /* GraphQL */ `
  query BookContentsByBookID(
    $bookID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookContentsByBookID(
      bookID: $bookID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        order
        label
        title
        freeText
        freeAudio
        freeAudioData
        adminAudioData
        text
        audio
        audioData
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        draftContentID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const refillsByReaderUserID = /* GraphQL */ `
  query RefillsByReaderUserID(
    $readerUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRefillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    refillsByReaderUserID(
      readerUserID: $readerUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        paymentType
        paymentId
        payload
        response
        confirmation
        amount
        status
        transfered
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const purchasesByReaderUserID = /* GraphQL */ `
  query PurchasesByReaderUserID(
    $readerUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    purchasesByReaderUserID(
      readerUserID: $readerUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        status
        unused
        rating
        current
        result
        identity
        buyer
        epub
        bookVersion
        bookUpdate
        amount
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        purchasedContents {
          nextToken
          __typename
        }
        paymentID
        payment {
          id
          sub
          amount
          made
          parameters
          transactionType
          transactionId
          note
          date
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const purchasesByBookID = /* GraphQL */ `
  query PurchasesByBookID(
    $bookID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    purchasesByBookID(
      bookID: $bookID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        status
        unused
        rating
        current
        result
        identity
        buyer
        epub
        bookVersion
        bookUpdate
        amount
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        purchasedContents {
          nextToken
          __typename
        }
        paymentID
        payment {
          id
          sub
          amount
          made
          parameters
          transactionType
          transactionId
          note
          date
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const purchasesByPaymentID = /* GraphQL */ `
  query PurchasesByPaymentID(
    $paymentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    purchasesByPaymentID(
      paymentID: $paymentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        status
        unused
        rating
        current
        result
        identity
        buyer
        epub
        bookVersion
        bookUpdate
        amount
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        purchasedContents {
          nextToken
          __typename
        }
        paymentID
        payment {
          id
          sub
          amount
          made
          parameters
          transactionType
          transactionId
          note
          date
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const purchasedContentsByPurchaseID = /* GraphQL */ `
  query PurchasedContentsByPurchaseID(
    $purchaseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPurchasedContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    purchasedContentsByPurchaseID(
      purchaseID: $purchaseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        order
        label
        title
        text
        audio
        audioData
        tempURL
        bookContentID
        purchaseID
        purchase {
          id
          sub
          authorSub
          status
          unused
          rating
          current
          result
          identity
          buyer
          epub
          bookVersion
          bookUpdate
          amount
          readerUserID
          bookID
          paymentID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookRatingsByReaderUserID = /* GraphQL */ `
  query BookRatingsByReaderUserID(
    $readerUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookRatingsByReaderUserID(
      readerUserID: $readerUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        bookVersion
        bookUpdate
        rating
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookRatingsByBookID = /* GraphQL */ `
  query BookRatingsByBookID(
    $bookID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookRatingsByBookID(
      bookID: $bookID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        bookVersion
        bookUpdate
        rating
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookLikesByReaderUserID = /* GraphQL */ `
  query BookLikesByReaderUserID(
    $readerUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookLikesByReaderUserID(
      readerUserID: $readerUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        bookVersion
        bookUpdate
        like
        status
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookLikesByBookID = /* GraphQL */ `
  query BookLikesByBookID(
    $bookID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookLikesByBookID(
      bookID: $bookID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        bookVersion
        bookUpdate
        like
        status
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const followAuthorsByReaderUserID = /* GraphQL */ `
  query FollowAuthorsByReaderUserID(
    $readerUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followAuthorsByReaderUserID(
      readerUserID: $readerUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        like
        status
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const followAuthorsByAuthorID = /* GraphQL */ `
  query FollowAuthorsByAuthorID(
    $authorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followAuthorsByAuthorID(
      authorID: $authorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        like
        status
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const notifyFollowersByReaderUserID = /* GraphQL */ `
  query NotifyFollowersByReaderUserID(
    $readerUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotifyFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notifyFollowersByReaderUserID(
      readerUserID: $readerUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        status
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const notifyFollowersByAuthorID = /* GraphQL */ `
  query NotifyFollowersByAuthorID(
    $authorID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotifyFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notifyFollowersByAuthorID(
      authorID: $authorID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        status
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const notifyFollowersByBookID = /* GraphQL */ `
  query NotifyFollowersByBookID(
    $bookID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotifyFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notifyFollowersByBookID(
      bookID: $bookID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        authorSub
        status
        readerUserID
        readerUser {
          id
          sub
          firstName
          lastName
          avatar
          avatarKeys
          avatarData
          birthday
          email
          phone
          cellPhone
          gender
          address
          city
          zip
          country
          status
          unsubscribe
          unsubscribeData
          credits
          createdAt
          updatedAt
          __typename
        }
        authorID
        author {
          id
          sub
          name
          firstName
          email
          gender
          birthdate
          avatar
          avatarKeys
          avatarTemp
          avatarData
          biography
          homeWeight
          familyWeight
          categoryWeight
          followCount
          status
          authorUserID
          createdAt
          updatedAt
          __typename
        }
        bookID
        book {
          id
          sub
          title
          description
          summary
          homeWeight
          familyWeight
          categoryWeight
          cover
          coverKeys
          coverData
          isbn
          epub
          freeEpub
          epubData
          freeEpubData
          adminEpub
          adminEpubData
          status
          bookType
          rating
          ratingCount
          likesCount
          purchasedCount
          purchasedAmount
          price
          discount
          contents
          audioPreview
          draftID
          authorID
          familyID
          categoryID
          subCategoryID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const categoriesByFamilyID = /* GraphQL */ `
  query CategoriesByFamilyID(
    $familyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoriesByFamilyID(
      familyID: $familyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        title
        description
        content
        order
        parameters
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        active
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        subCategories {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const subCategoriesByFamilyID = /* GraphQL */ `
  query SubCategoriesByFamilyID(
    $familyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subCategoriesByFamilyID(
      familyID: $familyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        title
        description
        content
        order
        parameters
        active
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const subCategoriesByCategoryID = /* GraphQL */ `
  query SubCategoriesByCategoryID(
    $categoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    subCategoriesByCategoryID(
      categoryID: $categoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        title
        description
        content
        order
        parameters
        active
        familyID
        family {
          id
          name
          title
          description
          icon
          iconKeys
          content
          parameters
          appVersion
          active
          createdAt
          updatedAt
          __typename
        }
        categoryID
        category {
          id
          name
          title
          description
          content
          order
          parameters
          familyID
          active
          createdAt
          updatedAt
          __typename
        }
        drafts {
          nextToken
          __typename
        }
        books {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const schoolUsersBySchoolID = /* GraphQL */ `
  query SchoolUsersBySchoolID(
    $schoolID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSchoolUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    schoolUsersBySchoolID(
      schoolID: $schoolID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sub
        firstName
        lastName
        email
        phoneNumber
        address
        status
        schoolREF
        schoolID
        school {
          id
          title
          phoneNumber
          fixeNumber
          description
          address
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const studentsBySchoolID = /* GraphQL */ `
  query StudentsBySchoolID(
    $schoolID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentsBySchoolID(
      schoolID: $schoolID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        phoneNumber
        email
        matricule
        birthday
        address
        schoolID
        school {
          id
          title
          phoneNumber
          fixeNumber
          description
          address
          createdAt
          updatedAt
          __typename
        }
        studentGroupID
        studentGroup {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        schoolSubscriptions {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const studentsByStudentGroupID = /* GraphQL */ `
  query StudentsByStudentGroupID(
    $studentGroupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentsByStudentGroupID(
      studentGroupID: $studentGroupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        phoneNumber
        email
        matricule
        birthday
        address
        schoolID
        school {
          id
          title
          phoneNumber
          fixeNumber
          description
          address
          createdAt
          updatedAt
          __typename
        }
        studentGroupID
        studentGroup {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        schoolSubscriptions {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const schoolSubscriptionsByStudentID = /* GraphQL */ `
  query SchoolSubscriptionsByStudentID(
    $studentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSchoolSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    schoolSubscriptionsByStudentID(
      studentID: $studentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        amount
        dateStart
        dateEnd
        studentID
        student {
          id
          firstName
          lastName
          phoneNumber
          email
          matricule
          birthday
          address
          schoolID
          studentGroupID
          createdAt
          updatedAt
          __typename
        }
        schoolYearID
        schoolYear {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const schoolSubscriptionsBySchoolYearID = /* GraphQL */ `
  query SchoolSubscriptionsBySchoolYearID(
    $schoolYearID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSchoolSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    schoolSubscriptionsBySchoolYearID(
      schoolYearID: $schoolYearID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        amount
        dateStart
        dateEnd
        studentID
        student {
          id
          firstName
          lastName
          phoneNumber
          email
          matricule
          birthday
          address
          schoolID
          studentGroupID
          createdAt
          updatedAt
          __typename
        }
        schoolYearID
        schoolYear {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const coursesByTeacherID = /* GraphQL */ `
  query CoursesByTeacherID(
    $teacherID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesByTeacherID(
      teacherID: $teacherID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        docs
        description
        teacherID
        teacher {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        studentGroupID
        studentgroup {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const coursesByStudentGroupID = /* GraphQL */ `
  query CoursesByStudentGroupID(
    $studentGroupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesByStudentGroupID(
      studentGroupID: $studentGroupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        docs
        description
        teacherID
        teacher {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        studentGroupID
        studentgroup {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const liveCoursesByTeacherID = /* GraphQL */ `
  query LiveCoursesByTeacherID(
    $teacherID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLiveCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    liveCoursesByTeacherID(
      teacherID: $teacherID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        dateStart
        dateEnd
        status
        teacherID
        teacher {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        studentGroupID
        studentGroup {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const liveCoursesByStudentGroupID = /* GraphQL */ `
  query LiveCoursesByStudentGroupID(
    $studentGroupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLiveCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    liveCoursesByStudentGroupID(
      studentGroupID: $studentGroupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        dateStart
        dateEnd
        status
        teacherID
        teacher {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        studentGroupID
        studentGroup {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const toTeachesByTeacherID = /* GraphQL */ `
  query ToTeachesByTeacherID(
    $teacherID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelToTeachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    toTeachesByTeacherID(
      teacherID: $teacherID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        date
        teacherID
        teacher {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        schoolID
        school {
          id
          title
          phoneNumber
          fixeNumber
          description
          address
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const toTeachesBySchoolID = /* GraphQL */ `
  query ToTeachesBySchoolID(
    $schoolID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelToTeachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    toTeachesBySchoolID(
      schoolID: $schoolID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        date
        teacherID
        teacher {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        schoolID
        school {
          id
          title
          phoneNumber
          fixeNumber
          description
          address
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const pricesByProductID = /* GraphQL */ `
  query PricesByProductID(
    $ProductID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPriceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pricesByProductID(
      ProductID: $ProductID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        amount
        description
        ProductID
        product {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByClientID = /* GraphQL */ `
  query OrdersByClientID(
    $ClientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByClientID(
      ClientID: $ClientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        amount
        ClientID
        client {
          id
          firstName
          lastName
          phoneNumber
          email
          sphoneNumber
          address
          createdAt
          updatedAt
          __typename
        }
        orderLines {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderLinesByProductID = /* GraphQL */ `
  query OrderLinesByProductID(
    $productID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderLinesByProductID(
      productID: $productID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amount
        productID
        product {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        orderID
        order {
          id
          title
          description
          amount
          ClientID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderLinesByOrderID = /* GraphQL */ `
  query OrderLinesByOrderID(
    $orderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderLinesByOrderID(
      orderID: $orderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amount
        productID
        product {
          id
          title
          description
          createdAt
          updatedAt
          __typename
        }
        orderID
        order {
          id
          title
          description
          amount
          ClientID
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
