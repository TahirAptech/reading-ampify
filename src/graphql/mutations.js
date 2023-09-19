/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthorUser = /* GraphQL */ `
  mutation CreateAuthorUser(
    $input: CreateAuthorUserInput!
    $condition: ModelAuthorUserConditionInput
  ) {
    createAuthorUser(input: $input, condition: $condition) {
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
export const updateAuthorUser = /* GraphQL */ `
  mutation UpdateAuthorUser(
    $input: UpdateAuthorUserInput!
    $condition: ModelAuthorUserConditionInput
  ) {
    updateAuthorUser(input: $input, condition: $condition) {
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
export const deleteAuthorUser = /* GraphQL */ `
  mutation DeleteAuthorUser(
    $input: DeleteAuthorUserInput!
    $condition: ModelAuthorUserConditionInput
  ) {
    deleteAuthorUser(input: $input, condition: $condition) {
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
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
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
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
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
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
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
export const createDraft = /* GraphQL */ `
  mutation CreateDraft(
    $input: CreateDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    createDraft(input: $input, condition: $condition) {
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
export const updateDraft = /* GraphQL */ `
  mutation UpdateDraft(
    $input: UpdateDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    updateDraft(input: $input, condition: $condition) {
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
export const deleteDraft = /* GraphQL */ `
  mutation DeleteDraft(
    $input: DeleteDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    deleteDraft(input: $input, condition: $condition) {
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
export const createDraftContent = /* GraphQL */ `
  mutation CreateDraftContent(
    $input: CreateDraftContentInput!
    $condition: ModelDraftContentConditionInput
  ) {
    createDraftContent(input: $input, condition: $condition) {
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
export const updateDraftContent = /* GraphQL */ `
  mutation UpdateDraftContent(
    $input: UpdateDraftContentInput!
    $condition: ModelDraftContentConditionInput
  ) {
    updateDraftContent(input: $input, condition: $condition) {
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
export const deleteDraftContent = /* GraphQL */ `
  mutation DeleteDraftContent(
    $input: DeleteDraftContentInput!
    $condition: ModelDraftContentConditionInput
  ) {
    deleteDraftContent(input: $input, condition: $condition) {
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
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createBookContent = /* GraphQL */ `
  mutation CreateBookContent(
    $input: CreateBookContentInput!
    $condition: ModelBookContentConditionInput
  ) {
    createBookContent(input: $input, condition: $condition) {
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
export const updateBookContent = /* GraphQL */ `
  mutation UpdateBookContent(
    $input: UpdateBookContentInput!
    $condition: ModelBookContentConditionInput
  ) {
    updateBookContent(input: $input, condition: $condition) {
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
export const deleteBookContent = /* GraphQL */ `
  mutation DeleteBookContent(
    $input: DeleteBookContentInput!
    $condition: ModelBookContentConditionInput
  ) {
    deleteBookContent(input: $input, condition: $condition) {
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
export const createReaderUser = /* GraphQL */ `
  mutation CreateReaderUser(
    $input: CreateReaderUserInput!
    $condition: ModelReaderUserConditionInput
  ) {
    createReaderUser(input: $input, condition: $condition) {
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
export const updateReaderUser = /* GraphQL */ `
  mutation UpdateReaderUser(
    $input: UpdateReaderUserInput!
    $condition: ModelReaderUserConditionInput
  ) {
    updateReaderUser(input: $input, condition: $condition) {
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
export const deleteReaderUser = /* GraphQL */ `
  mutation DeleteReaderUser(
    $input: DeleteReaderUserInput!
    $condition: ModelReaderUserConditionInput
  ) {
    deleteReaderUser(input: $input, condition: $condition) {
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
export const createRefill = /* GraphQL */ `
  mutation CreateRefill(
    $input: CreateRefillInput!
    $condition: ModelRefillConditionInput
  ) {
    createRefill(input: $input, condition: $condition) {
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
export const updateRefill = /* GraphQL */ `
  mutation UpdateRefill(
    $input: UpdateRefillInput!
    $condition: ModelRefillConditionInput
  ) {
    updateRefill(input: $input, condition: $condition) {
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
export const deleteRefill = /* GraphQL */ `
  mutation DeleteRefill(
    $input: DeleteRefillInput!
    $condition: ModelRefillConditionInput
  ) {
    deleteRefill(input: $input, condition: $condition) {
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
export const createPurchase = /* GraphQL */ `
  mutation CreatePurchase(
    $input: CreatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    createPurchase(input: $input, condition: $condition) {
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
export const updatePurchase = /* GraphQL */ `
  mutation UpdatePurchase(
    $input: UpdatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    updatePurchase(input: $input, condition: $condition) {
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
export const deletePurchase = /* GraphQL */ `
  mutation DeletePurchase(
    $input: DeletePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    deletePurchase(input: $input, condition: $condition) {
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
export const createPurchasedContent = /* GraphQL */ `
  mutation CreatePurchasedContent(
    $input: CreatePurchasedContentInput!
    $condition: ModelPurchasedContentConditionInput
  ) {
    createPurchasedContent(input: $input, condition: $condition) {
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
export const updatePurchasedContent = /* GraphQL */ `
  mutation UpdatePurchasedContent(
    $input: UpdatePurchasedContentInput!
    $condition: ModelPurchasedContentConditionInput
  ) {
    updatePurchasedContent(input: $input, condition: $condition) {
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
export const deletePurchasedContent = /* GraphQL */ `
  mutation DeletePurchasedContent(
    $input: DeletePurchasedContentInput!
    $condition: ModelPurchasedContentConditionInput
  ) {
    deletePurchasedContent(input: $input, condition: $condition) {
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
export const createBookRating = /* GraphQL */ `
  mutation CreateBookRating(
    $input: CreateBookRatingInput!
    $condition: ModelBookRatingConditionInput
  ) {
    createBookRating(input: $input, condition: $condition) {
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
export const updateBookRating = /* GraphQL */ `
  mutation UpdateBookRating(
    $input: UpdateBookRatingInput!
    $condition: ModelBookRatingConditionInput
  ) {
    updateBookRating(input: $input, condition: $condition) {
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
export const deleteBookRating = /* GraphQL */ `
  mutation DeleteBookRating(
    $input: DeleteBookRatingInput!
    $condition: ModelBookRatingConditionInput
  ) {
    deleteBookRating(input: $input, condition: $condition) {
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
export const createBookLike = /* GraphQL */ `
  mutation CreateBookLike(
    $input: CreateBookLikeInput!
    $condition: ModelBookLikeConditionInput
  ) {
    createBookLike(input: $input, condition: $condition) {
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
export const updateBookLike = /* GraphQL */ `
  mutation UpdateBookLike(
    $input: UpdateBookLikeInput!
    $condition: ModelBookLikeConditionInput
  ) {
    updateBookLike(input: $input, condition: $condition) {
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
export const deleteBookLike = /* GraphQL */ `
  mutation DeleteBookLike(
    $input: DeleteBookLikeInput!
    $condition: ModelBookLikeConditionInput
  ) {
    deleteBookLike(input: $input, condition: $condition) {
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
export const createFollowAuthor = /* GraphQL */ `
  mutation CreateFollowAuthor(
    $input: CreateFollowAuthorInput!
    $condition: ModelFollowAuthorConditionInput
  ) {
    createFollowAuthor(input: $input, condition: $condition) {
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
export const updateFollowAuthor = /* GraphQL */ `
  mutation UpdateFollowAuthor(
    $input: UpdateFollowAuthorInput!
    $condition: ModelFollowAuthorConditionInput
  ) {
    updateFollowAuthor(input: $input, condition: $condition) {
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
export const deleteFollowAuthor = /* GraphQL */ `
  mutation DeleteFollowAuthor(
    $input: DeleteFollowAuthorInput!
    $condition: ModelFollowAuthorConditionInput
  ) {
    deleteFollowAuthor(input: $input, condition: $condition) {
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
export const createNotifyFollower = /* GraphQL */ `
  mutation CreateNotifyFollower(
    $input: CreateNotifyFollowerInput!
    $condition: ModelNotifyFollowerConditionInput
  ) {
    createNotifyFollower(input: $input, condition: $condition) {
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
export const updateNotifyFollower = /* GraphQL */ `
  mutation UpdateNotifyFollower(
    $input: UpdateNotifyFollowerInput!
    $condition: ModelNotifyFollowerConditionInput
  ) {
    updateNotifyFollower(input: $input, condition: $condition) {
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
export const deleteNotifyFollower = /* GraphQL */ `
  mutation DeleteNotifyFollower(
    $input: DeleteNotifyFollowerInput!
    $condition: ModelNotifyFollowerConditionInput
  ) {
    deleteNotifyFollower(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
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
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
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
export const deleteFamily = /* GraphQL */ `
  mutation DeleteFamily(
    $input: DeleteFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    deleteFamily(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createSubCategory = /* GraphQL */ `
  mutation CreateSubCategory(
    $input: CreateSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    createSubCategory(input: $input, condition: $condition) {
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
export const updateSubCategory = /* GraphQL */ `
  mutation UpdateSubCategory(
    $input: UpdateSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    updateSubCategory(input: $input, condition: $condition) {
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
export const deleteSubCategory = /* GraphQL */ `
  mutation DeleteSubCategory(
    $input: DeleteSubCategoryInput!
    $condition: ModelSubCategoryConditionInput
  ) {
    deleteSubCategory(input: $input, condition: $condition) {
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
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
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
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
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
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
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
export const createSchoolUser = /* GraphQL */ `
  mutation CreateSchoolUser(
    $input: CreateSchoolUserInput!
    $condition: ModelSchoolUserConditionInput
  ) {
    createSchoolUser(input: $input, condition: $condition) {
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
export const updateSchoolUser = /* GraphQL */ `
  mutation UpdateSchoolUser(
    $input: UpdateSchoolUserInput!
    $condition: ModelSchoolUserConditionInput
  ) {
    updateSchoolUser(input: $input, condition: $condition) {
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
export const deleteSchoolUser = /* GraphQL */ `
  mutation DeleteSchoolUser(
    $input: DeleteSchoolUserInput!
    $condition: ModelSchoolUserConditionInput
  ) {
    deleteSchoolUser(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createSchoolYear = /* GraphQL */ `
  mutation CreateSchoolYear(
    $input: CreateSchoolYearInput!
    $condition: ModelSchoolYearConditionInput
  ) {
    createSchoolYear(input: $input, condition: $condition) {
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
export const updateSchoolYear = /* GraphQL */ `
  mutation UpdateSchoolYear(
    $input: UpdateSchoolYearInput!
    $condition: ModelSchoolYearConditionInput
  ) {
    updateSchoolYear(input: $input, condition: $condition) {
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
export const deleteSchoolYear = /* GraphQL */ `
  mutation DeleteSchoolYear(
    $input: DeleteSchoolYearInput!
    $condition: ModelSchoolYearConditionInput
  ) {
    deleteSchoolYear(input: $input, condition: $condition) {
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
export const createSchoolSubscription = /* GraphQL */ `
  mutation CreateSchoolSubscription(
    $input: CreateSchoolSubscriptionInput!
    $condition: ModelSchoolSubscriptionConditionInput
  ) {
    createSchoolSubscription(input: $input, condition: $condition) {
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
export const updateSchoolSubscription = /* GraphQL */ `
  mutation UpdateSchoolSubscription(
    $input: UpdateSchoolSubscriptionInput!
    $condition: ModelSchoolSubscriptionConditionInput
  ) {
    updateSchoolSubscription(input: $input, condition: $condition) {
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
export const deleteSchoolSubscription = /* GraphQL */ `
  mutation DeleteSchoolSubscription(
    $input: DeleteSchoolSubscriptionInput!
    $condition: ModelSchoolSubscriptionConditionInput
  ) {
    deleteSchoolSubscription(input: $input, condition: $condition) {
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
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
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
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
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
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
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
export const createStudentGroup = /* GraphQL */ `
  mutation CreateStudentGroup(
    $input: CreateStudentGroupInput!
    $condition: ModelStudentGroupConditionInput
  ) {
    createStudentGroup(input: $input, condition: $condition) {
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
export const updateStudentGroup = /* GraphQL */ `
  mutation UpdateStudentGroup(
    $input: UpdateStudentGroupInput!
    $condition: ModelStudentGroupConditionInput
  ) {
    updateStudentGroup(input: $input, condition: $condition) {
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
export const deleteStudentGroup = /* GraphQL */ `
  mutation DeleteStudentGroup(
    $input: DeleteStudentGroupInput!
    $condition: ModelStudentGroupConditionInput
  ) {
    deleteStudentGroup(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createLiveCourse = /* GraphQL */ `
  mutation CreateLiveCourse(
    $input: CreateLiveCourseInput!
    $condition: ModelLiveCourseConditionInput
  ) {
    createLiveCourse(input: $input, condition: $condition) {
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
export const updateLiveCourse = /* GraphQL */ `
  mutation UpdateLiveCourse(
    $input: UpdateLiveCourseInput!
    $condition: ModelLiveCourseConditionInput
  ) {
    updateLiveCourse(input: $input, condition: $condition) {
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
export const deleteLiveCourse = /* GraphQL */ `
  mutation DeleteLiveCourse(
    $input: DeleteLiveCourseInput!
    $condition: ModelLiveCourseConditionInput
  ) {
    deleteLiveCourse(input: $input, condition: $condition) {
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
export const createToTeach = /* GraphQL */ `
  mutation CreateToTeach(
    $input: CreateToTeachInput!
    $condition: ModelToTeachConditionInput
  ) {
    createToTeach(input: $input, condition: $condition) {
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
export const updateToTeach = /* GraphQL */ `
  mutation UpdateToTeach(
    $input: UpdateToTeachInput!
    $condition: ModelToTeachConditionInput
  ) {
    updateToTeach(input: $input, condition: $condition) {
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
export const deleteToTeach = /* GraphQL */ `
  mutation DeleteToTeach(
    $input: DeleteToTeachInput!
    $condition: ModelToTeachConditionInput
  ) {
    deleteToTeach(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createPrice = /* GraphQL */ `
  mutation CreatePrice(
    $input: CreatePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    createPrice(input: $input, condition: $condition) {
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
export const updatePrice = /* GraphQL */ `
  mutation UpdatePrice(
    $input: UpdatePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    updatePrice(input: $input, condition: $condition) {
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
export const deletePrice = /* GraphQL */ `
  mutation DeletePrice(
    $input: DeletePriceInput!
    $condition: ModelPriceConditionInput
  ) {
    deletePrice(input: $input, condition: $condition) {
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
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderLine = /* GraphQL */ `
  mutation CreateOrderLine(
    $input: CreateOrderLineInput!
    $condition: ModelOrderLineConditionInput
  ) {
    createOrderLine(input: $input, condition: $condition) {
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
export const updateOrderLine = /* GraphQL */ `
  mutation UpdateOrderLine(
    $input: UpdateOrderLineInput!
    $condition: ModelOrderLineConditionInput
  ) {
    updateOrderLine(input: $input, condition: $condition) {
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
export const deleteOrderLine = /* GraphQL */ `
  mutation DeleteOrderLine(
    $input: DeleteOrderLineInput!
    $condition: ModelOrderLineConditionInput
  ) {
    deleteOrderLine(input: $input, condition: $condition) {
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
