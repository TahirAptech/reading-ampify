/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthorUser = /* GraphQL */ `
  subscription OnCreateAuthorUser(
    $filter: ModelSubscriptionAuthorUserFilterInput
  ) {
    onCreateAuthorUser(filter: $filter) {
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
export const onUpdateAuthorUser = /* GraphQL */ `
  subscription OnUpdateAuthorUser(
    $filter: ModelSubscriptionAuthorUserFilterInput
  ) {
    onUpdateAuthorUser(filter: $filter) {
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
export const onDeleteAuthorUser = /* GraphQL */ `
  subscription OnDeleteAuthorUser(
    $filter: ModelSubscriptionAuthorUserFilterInput
  ) {
    onDeleteAuthorUser(filter: $filter) {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onCreateAuthor(filter: $filter) {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onUpdateAuthor(filter: $filter) {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor($filter: ModelSubscriptionAuthorFilterInput) {
    onDeleteAuthor(filter: $filter) {
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
export const onCreateDraft = /* GraphQL */ `
  subscription OnCreateDraft($filter: ModelSubscriptionDraftFilterInput) {
    onCreateDraft(filter: $filter) {
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
export const onUpdateDraft = /* GraphQL */ `
  subscription OnUpdateDraft($filter: ModelSubscriptionDraftFilterInput) {
    onUpdateDraft(filter: $filter) {
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
export const onDeleteDraft = /* GraphQL */ `
  subscription OnDeleteDraft($filter: ModelSubscriptionDraftFilterInput) {
    onDeleteDraft(filter: $filter) {
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
export const onCreateDraftContent = /* GraphQL */ `
  subscription OnCreateDraftContent(
    $filter: ModelSubscriptionDraftContentFilterInput
  ) {
    onCreateDraftContent(filter: $filter) {
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
export const onUpdateDraftContent = /* GraphQL */ `
  subscription OnUpdateDraftContent(
    $filter: ModelSubscriptionDraftContentFilterInput
  ) {
    onUpdateDraftContent(filter: $filter) {
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
export const onDeleteDraftContent = /* GraphQL */ `
  subscription OnDeleteDraftContent(
    $filter: ModelSubscriptionDraftContentFilterInput
  ) {
    onDeleteDraftContent(filter: $filter) {
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
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
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
export const onCreateBookContent = /* GraphQL */ `
  subscription OnCreateBookContent(
    $filter: ModelSubscriptionBookContentFilterInput
  ) {
    onCreateBookContent(filter: $filter) {
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
export const onUpdateBookContent = /* GraphQL */ `
  subscription OnUpdateBookContent(
    $filter: ModelSubscriptionBookContentFilterInput
  ) {
    onUpdateBookContent(filter: $filter) {
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
export const onDeleteBookContent = /* GraphQL */ `
  subscription OnDeleteBookContent(
    $filter: ModelSubscriptionBookContentFilterInput
  ) {
    onDeleteBookContent(filter: $filter) {
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
export const onCreateReaderUser = /* GraphQL */ `
  subscription OnCreateReaderUser(
    $filter: ModelSubscriptionReaderUserFilterInput
  ) {
    onCreateReaderUser(filter: $filter) {
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
export const onUpdateReaderUser = /* GraphQL */ `
  subscription OnUpdateReaderUser(
    $filter: ModelSubscriptionReaderUserFilterInput
  ) {
    onUpdateReaderUser(filter: $filter) {
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
export const onDeleteReaderUser = /* GraphQL */ `
  subscription OnDeleteReaderUser(
    $filter: ModelSubscriptionReaderUserFilterInput
  ) {
    onDeleteReaderUser(filter: $filter) {
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
export const onCreateRefill = /* GraphQL */ `
  subscription OnCreateRefill($filter: ModelSubscriptionRefillFilterInput) {
    onCreateRefill(filter: $filter) {
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
export const onUpdateRefill = /* GraphQL */ `
  subscription OnUpdateRefill($filter: ModelSubscriptionRefillFilterInput) {
    onUpdateRefill(filter: $filter) {
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
export const onDeleteRefill = /* GraphQL */ `
  subscription OnDeleteRefill($filter: ModelSubscriptionRefillFilterInput) {
    onDeleteRefill(filter: $filter) {
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
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onCreatePurchase(filter: $filter) {
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
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onUpdatePurchase(filter: $filter) {
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
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onDeletePurchase(filter: $filter) {
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
export const onCreatePurchasedContent = /* GraphQL */ `
  subscription OnCreatePurchasedContent(
    $filter: ModelSubscriptionPurchasedContentFilterInput
  ) {
    onCreatePurchasedContent(filter: $filter) {
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
export const onUpdatePurchasedContent = /* GraphQL */ `
  subscription OnUpdatePurchasedContent(
    $filter: ModelSubscriptionPurchasedContentFilterInput
  ) {
    onUpdatePurchasedContent(filter: $filter) {
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
export const onDeletePurchasedContent = /* GraphQL */ `
  subscription OnDeletePurchasedContent(
    $filter: ModelSubscriptionPurchasedContentFilterInput
  ) {
    onDeletePurchasedContent(filter: $filter) {
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
export const onCreateBookRating = /* GraphQL */ `
  subscription OnCreateBookRating(
    $filter: ModelSubscriptionBookRatingFilterInput
  ) {
    onCreateBookRating(filter: $filter) {
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
export const onUpdateBookRating = /* GraphQL */ `
  subscription OnUpdateBookRating(
    $filter: ModelSubscriptionBookRatingFilterInput
  ) {
    onUpdateBookRating(filter: $filter) {
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
export const onDeleteBookRating = /* GraphQL */ `
  subscription OnDeleteBookRating(
    $filter: ModelSubscriptionBookRatingFilterInput
  ) {
    onDeleteBookRating(filter: $filter) {
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
export const onCreateBookLike = /* GraphQL */ `
  subscription OnCreateBookLike($filter: ModelSubscriptionBookLikeFilterInput) {
    onCreateBookLike(filter: $filter) {
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
export const onUpdateBookLike = /* GraphQL */ `
  subscription OnUpdateBookLike($filter: ModelSubscriptionBookLikeFilterInput) {
    onUpdateBookLike(filter: $filter) {
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
export const onDeleteBookLike = /* GraphQL */ `
  subscription OnDeleteBookLike($filter: ModelSubscriptionBookLikeFilterInput) {
    onDeleteBookLike(filter: $filter) {
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
export const onCreateFollowAuthor = /* GraphQL */ `
  subscription OnCreateFollowAuthor(
    $filter: ModelSubscriptionFollowAuthorFilterInput
  ) {
    onCreateFollowAuthor(filter: $filter) {
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
export const onUpdateFollowAuthor = /* GraphQL */ `
  subscription OnUpdateFollowAuthor(
    $filter: ModelSubscriptionFollowAuthorFilterInput
  ) {
    onUpdateFollowAuthor(filter: $filter) {
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
export const onDeleteFollowAuthor = /* GraphQL */ `
  subscription OnDeleteFollowAuthor(
    $filter: ModelSubscriptionFollowAuthorFilterInput
  ) {
    onDeleteFollowAuthor(filter: $filter) {
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
export const onCreateNotifyFollower = /* GraphQL */ `
  subscription OnCreateNotifyFollower(
    $filter: ModelSubscriptionNotifyFollowerFilterInput
  ) {
    onCreateNotifyFollower(filter: $filter) {
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
export const onUpdateNotifyFollower = /* GraphQL */ `
  subscription OnUpdateNotifyFollower(
    $filter: ModelSubscriptionNotifyFollowerFilterInput
  ) {
    onUpdateNotifyFollower(filter: $filter) {
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
export const onDeleteNotifyFollower = /* GraphQL */ `
  subscription OnDeleteNotifyFollower(
    $filter: ModelSubscriptionNotifyFollowerFilterInput
  ) {
    onDeleteNotifyFollower(filter: $filter) {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onCreatePayment(filter: $filter) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onUpdatePayment(filter: $filter) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onDeletePayment(filter: $filter) {
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
export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onCreateFamily(filter: $filter) {
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
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onUpdateFamily(filter: $filter) {
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
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily($filter: ModelSubscriptionFamilyFilterInput) {
    onDeleteFamily(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateSubCategory = /* GraphQL */ `
  subscription OnCreateSubCategory(
    $filter: ModelSubscriptionSubCategoryFilterInput
  ) {
    onCreateSubCategory(filter: $filter) {
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
export const onUpdateSubCategory = /* GraphQL */ `
  subscription OnUpdateSubCategory(
    $filter: ModelSubscriptionSubCategoryFilterInput
  ) {
    onUpdateSubCategory(filter: $filter) {
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
export const onDeleteSubCategory = /* GraphQL */ `
  subscription OnDeleteSubCategory(
    $filter: ModelSubscriptionSubCategoryFilterInput
  ) {
    onDeleteSubCategory(filter: $filter) {
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
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onCreateSchool(filter: $filter) {
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
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onUpdateSchool(filter: $filter) {
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
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onDeleteSchool(filter: $filter) {
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
export const onCreateSchoolUser = /* GraphQL */ `
  subscription OnCreateSchoolUser(
    $filter: ModelSubscriptionSchoolUserFilterInput
  ) {
    onCreateSchoolUser(filter: $filter) {
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
export const onUpdateSchoolUser = /* GraphQL */ `
  subscription OnUpdateSchoolUser(
    $filter: ModelSubscriptionSchoolUserFilterInput
  ) {
    onUpdateSchoolUser(filter: $filter) {
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
export const onDeleteSchoolUser = /* GraphQL */ `
  subscription OnDeleteSchoolUser(
    $filter: ModelSubscriptionSchoolUserFilterInput
  ) {
    onDeleteSchoolUser(filter: $filter) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateSchoolYear = /* GraphQL */ `
  subscription OnCreateSchoolYear(
    $filter: ModelSubscriptionSchoolYearFilterInput
  ) {
    onCreateSchoolYear(filter: $filter) {
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
export const onUpdateSchoolYear = /* GraphQL */ `
  subscription OnUpdateSchoolYear(
    $filter: ModelSubscriptionSchoolYearFilterInput
  ) {
    onUpdateSchoolYear(filter: $filter) {
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
export const onDeleteSchoolYear = /* GraphQL */ `
  subscription OnDeleteSchoolYear(
    $filter: ModelSubscriptionSchoolYearFilterInput
  ) {
    onDeleteSchoolYear(filter: $filter) {
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
export const onCreateSchoolSubscription = /* GraphQL */ `
  subscription OnCreateSchoolSubscription(
    $filter: ModelSubscriptionSchoolSubscriptionFilterInput
  ) {
    onCreateSchoolSubscription(filter: $filter) {
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
export const onUpdateSchoolSubscription = /* GraphQL */ `
  subscription OnUpdateSchoolSubscription(
    $filter: ModelSubscriptionSchoolSubscriptionFilterInput
  ) {
    onUpdateSchoolSubscription(filter: $filter) {
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
export const onDeleteSchoolSubscription = /* GraphQL */ `
  subscription OnDeleteSchoolSubscription(
    $filter: ModelSubscriptionSchoolSubscriptionFilterInput
  ) {
    onDeleteSchoolSubscription(filter: $filter) {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onCreateTeacher(filter: $filter) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onUpdateTeacher(filter: $filter) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onDeleteTeacher(filter: $filter) {
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
export const onCreateStudentGroup = /* GraphQL */ `
  subscription OnCreateStudentGroup(
    $filter: ModelSubscriptionStudentGroupFilterInput
  ) {
    onCreateStudentGroup(filter: $filter) {
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
export const onUpdateStudentGroup = /* GraphQL */ `
  subscription OnUpdateStudentGroup(
    $filter: ModelSubscriptionStudentGroupFilterInput
  ) {
    onUpdateStudentGroup(filter: $filter) {
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
export const onDeleteStudentGroup = /* GraphQL */ `
  subscription OnDeleteStudentGroup(
    $filter: ModelSubscriptionStudentGroupFilterInput
  ) {
    onDeleteStudentGroup(filter: $filter) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateLiveCourse = /* GraphQL */ `
  subscription OnCreateLiveCourse(
    $filter: ModelSubscriptionLiveCourseFilterInput
  ) {
    onCreateLiveCourse(filter: $filter) {
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
export const onUpdateLiveCourse = /* GraphQL */ `
  subscription OnUpdateLiveCourse(
    $filter: ModelSubscriptionLiveCourseFilterInput
  ) {
    onUpdateLiveCourse(filter: $filter) {
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
export const onDeleteLiveCourse = /* GraphQL */ `
  subscription OnDeleteLiveCourse(
    $filter: ModelSubscriptionLiveCourseFilterInput
  ) {
    onDeleteLiveCourse(filter: $filter) {
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
export const onCreateToTeach = /* GraphQL */ `
  subscription OnCreateToTeach($filter: ModelSubscriptionToTeachFilterInput) {
    onCreateToTeach(filter: $filter) {
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
export const onUpdateToTeach = /* GraphQL */ `
  subscription OnUpdateToTeach($filter: ModelSubscriptionToTeachFilterInput) {
    onUpdateToTeach(filter: $filter) {
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
export const onDeleteToTeach = /* GraphQL */ `
  subscription OnDeleteToTeach($filter: ModelSubscriptionToTeachFilterInput) {
    onDeleteToTeach(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreatePrice = /* GraphQL */ `
  subscription OnCreatePrice($filter: ModelSubscriptionPriceFilterInput) {
    onCreatePrice(filter: $filter) {
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
export const onUpdatePrice = /* GraphQL */ `
  subscription OnUpdatePrice($filter: ModelSubscriptionPriceFilterInput) {
    onUpdatePrice(filter: $filter) {
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
export const onDeletePrice = /* GraphQL */ `
  subscription OnDeletePrice($filter: ModelSubscriptionPriceFilterInput) {
    onDeletePrice(filter: $filter) {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
    onCreateClient(filter: $filter) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
    onUpdateClient(filter: $filter) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
    onDeleteClient(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateOrderLine = /* GraphQL */ `
  subscription OnCreateOrderLine(
    $filter: ModelSubscriptionOrderLineFilterInput
  ) {
    onCreateOrderLine(filter: $filter) {
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
export const onUpdateOrderLine = /* GraphQL */ `
  subscription OnUpdateOrderLine(
    $filter: ModelSubscriptionOrderLineFilterInput
  ) {
    onUpdateOrderLine(filter: $filter) {
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
export const onDeleteOrderLine = /* GraphQL */ `
  subscription OnDeleteOrderLine(
    $filter: ModelSubscriptionOrderLineFilterInput
  ) {
    onDeleteOrderLine(filter: $filter) {
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
