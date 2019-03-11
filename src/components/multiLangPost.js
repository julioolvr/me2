import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Time = styled.time`
  min-width: 100px;
  display: inline-block;
  text-align: right;
  font-size: 0.8em;
  color: #888; // TODO: Theme?
  margin-right: 1em;
`;

const Extra = styled.span`
  display: inline-block;
  font-size: 0.7em;
  margin-left: 0.5em;
  vertical-align: -0.3em;
`;

const PostRow = styled.li`
  display: flex;
`;

const PostTitle = styled.div`
  flex: 1;
`;

function currentLang(group, lang) {
  return group[lang];
}

function otherLang(group, lang) {
  const other = Object.keys(group).filter(key => key !== lang)[0];

  if (other) {
    return group[other];
  }

  return null;
}

function MultiLangPost({ postGroup, lang }) {
  const postInCurrentLang = currentLang(postGroup, lang);
  const postInOtherLang = otherLang(postGroup, lang);

  if (postInCurrentLang && !postInOtherLang) {
    return (
      <PostRow>
        <Time>{postInCurrentLang.context.date}</Time>
        <PostTitle>
          <Link to={postInCurrentLang.path}>{postInCurrentLang.context.frontmatter.title}</Link>
        </PostTitle>
      </PostRow>
    );
  }

  if (!postInCurrentLang && postInOtherLang) {
    let warningText;

    if (lang === 'en') {
      warningText = 'Spanish only';
    } else {
      warningText = 'Solo en inglés';
    }

    return (
      <PostRow>
        <Time>{postInOtherLang.context.date}</Time>

        <PostTitle>
          <Link to={postInOtherLang.path}>{postInOtherLang.context.frontmatter.title}</Link>
          <Extra>
            <span>{warningText}</span>
          </Extra>
        </PostTitle>
      </PostRow>
    );
  }

  let infoText;

  if (lang === 'en') {
    infoText = 'También en español';
  } else {
    infoText = 'Also available in English';
  }

  return (
    <PostRow>
      <Time>{postInCurrentLang.context.date}</Time>

      <PostTitle>
        <Link to={postInCurrentLang.path}>{postInCurrentLang.context.frontmatter.title}</Link>
        <Extra>
          <Link to={postInOtherLang.path}>{infoText}</Link>
        </Extra>
      </PostTitle>
    </PostRow>
  );
}

MultiLangPost.propTypes = {
  postGroup: PropTypes.shape({ es: PropTypes.object, en: PropTypes.object }).isRequired,
  lang: PropTypes.oneOf(['en', 'es']).isRequired,
};

export default MultiLangPost;
