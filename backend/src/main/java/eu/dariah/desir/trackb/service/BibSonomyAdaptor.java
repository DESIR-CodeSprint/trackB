package eu.dariah.desir.trackb.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.bibsonomy.model.Post;
import org.bibsonomy.model.Resource;
import org.bibsonomy.model.logic.LogicInterface;
import org.bibsonomy.rest.client.RestLogicFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;

/**
 * Facilitates interaction with the BibSonomy REST API.
 *
 * @author rja
 */
@Service
public class BibSonomyAdaptor {

	@Value("${bibsonomy.api.user}")
	private String bibsonomyApiUser;

	@Value("${bibsonomy.api.key}")
	private String bibsonomyApiKey;

	@Value("${bibsonomy.api.url}")
	private String bibsonomyApiUrl;

	private LogicInterface bibsonomy;

	private BibSonomyModelConverter converter;


	@Autowired
	public BibSonomyAdaptor(BibSonomyModelConverter converter) {
		this.converter = converter;
	}


	/**
	 * Initialise BibSonomy REST API
	 */
	@PostConstruct
	public void init() {
    	final RestLogicFactory rlf = new RestLogicFactory(this.bibsonomyApiUrl);
    	this.bibsonomy = rlf.getLogicAccess(this.bibsonomyApiUser, this.bibsonomyApiKey);
	}


	/**
	 * Store items in BibSonomy.
	 *
	 * @param items
	 */
	public void storeItems(final List<YetAnotherBibliographicItem> items) {
		// convert model
		final List<Post<? extends Resource>> posts = converter.convertToPosts(items, this.bibsonomyApiUser);

		// call API
		final List<String> result = bibsonomy.createPosts(posts);

		// FIXME: do error handling using messages in result

	}


    /**
     * Delete Post in BibSonomy.
     *
     * @param user
     * @param hash
     */
    public void deletePost(String user, String hash) {

        List<String> hashList = new ArrayList<>();
        hashList.add(hash);

        // call API
        bibsonomy.deletePosts(user, hashList);
    }


}
